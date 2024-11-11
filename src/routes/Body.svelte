<script>
	// @ts-nocheck
	import './Body.scss';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Label } from '$lib/components/ui/label';
	import { base } from '$app/paths';
	import IconoirPlaySolid from '~icons/iconoir/play-solid';

	const GuessCondition = Object.freeze({
		IDLE: 'neutral',
		WRONG: 'red',
		CLOSE: 'amber',
		CORRECT: 'green'
	});
	let { pokemon } = $props();

	// let shapeSource = [`$lib/assets/${pokemon.speciesObj.shape.name}.png`];
	// let shapeSource = [`/images/${pokemon.speciesObj.shape.name}.png`]

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
		if (e.code === 'Enter') {
			if (guess[guessNumber].value.toUpperCase() === goldenPokemonName) {
				guess[guessNumber].howClose = GuessCondition.CORRECT;
				guessedCorrectly = true;
				console.log('correct');
				return;
			}

			const fetchData = await fetch(
				`https://pokeapi.co/api/v2/pokemon-species/${guess[guessNumber].value}`
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
					// box.classList.remove("animate-shake");
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
		<Card.Root class="bg-rhydon-secondary shadow-lg">
			<Card.Header class="items-center">
				<Card.Title
					class={guessNumber >= 5 || guessedCorrectly
						? `font-PressStart2P text-center`
						: `font-PressStart2P invisible text-center`}>{goldenPokemonName}</Card.Title
				>
			</Card.Header>
			<Card.Content>
				<div class="flex aspect-auto columns-2 flex-row justify-center">
					<div class="flex flex-col">
						<img
							id="sprite"
							class={guessNumber >= 4 || guessedCorrectly ? `` : `invisible`}
							src={spriteSource}
							alt="pokemon sprite"
						/>
						<div class="flex flex-col items-end justify-center gap-1">
							<Badge class="bg-rhydon-tertiary text-black"
								>Height: {Math.round(pokemon.pokemonObj.height * 3.937)} in.</Badge
							>
							<Badge class="bg-rhydon-tertiary text-black"
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
					<div class="flex flex-col place-items-center justify-between">
						<Label class="text-md">Cry</Label>
						<Button
							class="bg-rhydon-tertiary place-self-end rounded-full text-black"
							on:click={playAudio}
							id="cry"><IconoirPlaySolid /></Button
						>
					</div>
					<div class="flex flex-col place-items-center justify-between">
						<Label class="text-md">Types</Label>
						<div class="flex flex-col gap-1">
							{#each goldenPokemonObj.types as type}
								<Badge
									id={type}
									class={guessNumber >= 1 || guessedCorrectly
										? `bg-rhydon-tertiary text-black`
										: `bg-rhydon-teriary invisible text-black`}
								>
									{type}
								</Badge>
							{/each}
						</div>
					</div>
					<div class="flex flex-col place-items-center">
						<Label class="text-md" for="shape">Shape</Label>
						<img
							id="shape"
							src={base + `/images/${pokemon.speciesObj.shape.name}.png`}
							alt="pokemon shape"
							class={guessNumber >= 2 || guessedCorrectly ? `` : `invisible`}
						/>
					</div>
					<div class="flex flex-col place-items-center justify-between">
						<Label class="text-md" for="ability">Ability</Label>
						<Badge
							id="ability"
							class={guessNumber >= 3 || guessedCorrectly
								? `bg-rhydon-tertiary text-black`
								: `bg-rhydon-tertiary invisible text-black`}>{goldenPokemonObj.ability}</Badge
						>
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
