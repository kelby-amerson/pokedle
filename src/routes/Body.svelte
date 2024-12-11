<script>
	// @ts-nocheck
	import './Body.scss';
	import { base } from '$app/paths';
    import { Button } from '$lib/components/ui/button';
	import CardComponent from './CardComponent.svelte';
	import Guesses from './Guesses.svelte';
    import MaterialSymbolsSettings from '~icons/material-symbols/settings';
    import * as Popover from "$lib/components/ui/popover";

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

	const goldenPokemonObj = {
		name: pokemon.pokemonObj.name.toUpperCase(),
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
</script>

<div class="invisible invisible bg-amber-300 bg-green-300 bg-neutral-300 bg-red-300"></div>
<div class="flex justify-end mt-1 mr-2">
    <Popover.Root>
        <Popover.Trigger>
            <Button class="bg-swellow-tertiary rounded-full">
                <MaterialSymbolsSettings />
            </Button>
        </Popover.Trigger>
        <Popover.Content>
            <h1>Settings</h1>
        </Popover.Content>
    </Popover.Root>
</div>
<div class="flex justify-center">
    <img src={base + `/images/pokedle-small.png`} alt="pokedle title" />
</div>
<div class="lg:flex lg:flex-row lg:justify-center">
	<CardComponent {guessNumber} {guessedCorrectly} {pokemon} {goldenPokemonObj} />
	<Guesses bind:guess bind:guessNumber bind:guessedCorrectly {goldenPokemonObj} />
</div>
