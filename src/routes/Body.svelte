<script>
	// @ts-nocheck
	import './Body.scss';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Label } from '$lib/components/ui/label';
	import { base } from '$app/paths';
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import IconoirPlaySolid from '~icons/iconoir/play-solid';

	const GuessCondition = Object.freeze({
		IDLE: 'neutral',
		WRONG: 'red',
		CLOSE: 'amber',
		CORRECT: 'green'
	});
	let { pokemon } = $props();

	const types = [];
	pokemon.pokemonObj.types.forEach((obj) => {
		types.push(obj.type.name);
	});
	const generationString = pokemon.speciesObj.generation.url.split('/');
	const generation = generationString[6];

	const goldenPokemonName = pokemon.pokemonObj.name.toUpperCase();
	const goldenPokemonObj = {
		name: pokemon.pokemonObj.name,
		types,
		generation: pokemon.speciesObj.generation.name,
		cry: pokemon.pokemonObj.cries.latest,
		ability: pokemon.pokemonObj.abilities[0].ability.name
	};

	console.log('goldenPokemonObj', goldenPokemonObj);

	let guess = $state([
		{
			value: '',
			howClose: GuessCondition.IDLE
		},
		{
			value: '',
			howClose: GuessCondition.IDLE
		},
		{
			value: '',
			howClose: GuessCondition.IDLE
		},
		{
			value: '',
			howClose: GuessCondition.IDLE
		},
		{
			value: '',
			howClose: GuessCondition.IDLE
		}
	]);
	let guessNumber = $state(0);
	let guessedCorrectly = $state(false);

	console.log('name', pokemon.pokemonObj.name);
	let spriteSource = pokemon.pokemonObj.sprites.front_default;

	function playAudio() {
		const audioElement = new Audio(goldenPokemonObj.cry);
		audioElement.play();
	}

	async function updateGuess(e) {
		console.log(e);
		if (e.key === 'Enter') {
			if (guess[guessNumber].value.toUpperCase() === goldenPokemonName) {
				guess[guessNumber].howClose = GuessCondition.CORRECT;
				guessedCorrectly = true;
				console.log('correct');
				return;
			}

			const fetchData = await fetch(
				`https://pokeapi.co/api/v2/pokemon-species/${guess[guessNumber].value.toLowerCase()}`
			);

			const response = await fetchData
				.json()
				.then((res) => {
					if (res.generation.name === goldenPokemonObj.generation) {
						guess[guessNumber].howClose = GuessCondition.CLOSE;
						console.log('close');
					} else {
						guess[guessNumber].howClose = GuessCondition.WRONG;
					}
					guessNumber++;
				})
				.catch((err) => {
					const box = document.getElementById(`guess${guessNumber}`);
					box.classList.add('animate-shake');
					box.addEventListener('animationend', function (e) {
						box.classList.remove('animate-shake');
					});
					return;
				});
		}
	}
</script>

<div class="invisible invisible bg-amber-300 bg-green-300 bg-neutral-300 bg-red-300"></div>
<div class="flex justify-center">
	<img src={base + `/images/pokedle-small.png`} />
</div>
<div class="lg:flex lg:flex-row lg:justify-center">
	<div class="container sm:mx-auto sm:my-3 sm:max-w-max lg:mx-10">
		<Card.Root class="bg-swellow-secondary shadow-lg">
			<Card.Header class="items-center">
				{#if guessNumber >= 5 || guessedCorrectly}
					<div transition:fade>
						<Card.Title class={`font-PressStart2P text-center h-5`}>
							{goldenPokemonName}
						</Card.Title>
					</div>
				{/if}
			</Card.Header>
			<Card.Content>
				<div class="flex aspect-auto columns-2 flex-row justify-center">
					<div class="flex flex-col place-content-end lg:h-40">
						{#if guessNumber >= 4 || guessedCorrectly}
							<img
								id="sprite"
								src={spriteSource}
								transition:fade={{ duration: 3000, easing: quintOut }}
								alt="pokemon sprite"
							/>
						{/if}
						<div class="flex flex-col items-end justify-center gap-1">
							<Badge class="bg-swellow-tertiary"
								>Height: {Math.round(pokemon.pokemonObj.height * 3.937)} in.</Badge
							>
							<Badge class="bg-swellow-tertiary"
								>Weight: {Math.round(pokemon.pokemonObj.weight / 4.536)} lb
							</Badge>
						</div>
					</div>
					<div class="flex flex-col flex-wrap justify-center">
						{#each pokemon.pokemonObj.stats as stat}
							<div>
								<Badge id="stat" class={`badge ${stat.stat.name} flex-1`}>
									{stat.stat.name}
									{stat.base_stat}
								</Badge>
							</div>
						{/each}
					</div>
				</div>
				<div class="flex aspect-auto columns-4 flex-row justify-center gap-1">
					<div class="flex w-16 flex-col place-items-center justify-between">
						<Label class="my-1">Cry</Label>
						<Button class="bg-swellow-tertiary rounded-full" on:click={playAudio} id="cry"
							><IconoirPlaySolid /></Button
						>
					</div>
					<div class="flex w-16 flex-col place-items-center justify-between">
						<Label class="my-1">Types</Label>
						{#if guessNumber >= 1 || guessedCorrectly}
							<div class="flex flex-col gap-1" transition:fade={{ duration: 2000 }}>
								{#each goldenPokemonObj.types as type}
									<Badge id={type} class={`bg-swellow-tertiary`}>
										{type}
									</Badge>
								{/each}
							</div>
						{/if}
					</div>
					<div class="flex w-16 flex-col place-items-center">
						<Label class="my-1" for="shape">Shape</Label>
						{#if guessNumber >= 2 || guessedCorrectly}
							<img
								id="shape"
								src={base + `/images/${pokemon.speciesObj.shape.name}.png`}
								alt="pokemon shape"
								transition:fade={{ duration: 3000, easing: quintOut }}
							/>
						{/if}
					</div>
					<div class="flex w-16 flex-col place-items-center justify-between">
						<Label class="my-1" for="ability">Ability</Label>
						{#if guessNumber >= 3 || guessedCorrectly}
							<div transition:fade>
								<Badge id="ability" class={`bg-swellow-tertiary`}>{goldenPokemonObj.ability}</Badge>
							</div>
						{/if}
					</div>
				</div>
			</Card.Content>
		</Card.Root>
	</div>

	<div class="flex items-center justify-center">
		<form onkeydown={(e) => updateGuess(e)}>
			<Input
				id="guess0"
				placeholder="Guess #1"
				class={`max-w-xs bg-${guess[0].howClose}-300 mb-1`}
				bind:value={guess[0].value}
				disabled={guessNumber !== 0 || guessedCorrectly}
			/>
			<Input
				id="guess1"
				placeholder="Guess #2"
				class={`max-w-xs bg-${guess[1].howClose}-300 mb-1`}
				bind:value={guess[1].value}
				disabled={guessNumber !== 1 || guessedCorrectly}
			/>
			<Input
				id="guess2"
				placeholder="Guess #3"
				class={`max-w-xs bg-${guess[2].howClose}-300 mb-1`}
				bind:value={guess[2].value}
				disabled={guessNumber !== 2 || guessedCorrectly}
			/>
			<Input
				id="guess3"
				placeholder="Guess #4"
				class={`max-w-xs bg-${guess[3].howClose}-300 mb-1`}
				bind:value={guess[3].value}
				disabled={guessNumber !== 3 || guessedCorrectly}
			/>
			<Input
				id="guess4"
				placeholder="Guess #5"
				class={`max-w-xs bg-${guess[4].howClose}-300`}
				bind:value={guess[4].value}
				disabled={guessNumber !== 4 || guessedCorrectly}
			/>
		</form>
	</div>
</div>
