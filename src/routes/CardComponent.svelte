<script>
    import './Body.scss';
    import * as Card from '$lib/components/ui/card';
    import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Label } from '$lib/components/ui/label';
    import IconoirPlaySolid from '~icons/iconoir/play-solid';
    import { base } from '$app/paths';
    import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
    import { setContext, getContext } from 'svelte';

    let {guessNumber, guessedCorrectly, pokemon, goldenPokemonObj} = $props();
    console.log("pokemon", pokemon)
    let spriteSource = pokemon?.pokemonObj?.sprites.front_default;

    function playAudio() {
		const audioElement = new Audio(goldenPokemonObj.cry);
		audioElement.play();
	}

</script>

<div class="container sm:mx-auto sm:my-3 sm:max-w-max lg:mx-10">

    <Card.Root class="bg-swellow-secondary shadow-lg">
        <Card.Header class="items-center">
            {#if guessNumber >= 5 || guessedCorrectly}
                <div transition:fade>
                    <Card.Title class={`font-PressStart2P text-center h-5`}>
                        {goldenPokemonObj.name}
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