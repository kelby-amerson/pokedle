<script>
	import { Input } from '$lib/components/ui/input';
    import { pokemonNames } from "../lib/pokemonNames";

	const GuessCondition = Object.freeze({
		IDLE: 'neutral',
		WRONG: 'red',
		CLOSE: 'amber',
		CORRECT: 'green'
	});

	let {
		guess = $bindable(),
		guessNumber = $bindable(),
		guessedCorrectly = $bindable(),
		goldenPokemonObj
	} = $props();

	// @ts-ignore
	async function updateGuess(e) {
		console.log(e);
		if (e.key === 'Enter') {
			if (guess[guessNumber].value.toUpperCase() === goldenPokemonObj.name) {
				guess[guessNumber].howClose = GuessCondition.CORRECT;
				guessedCorrectly = true;
				console.log('correct');
				return;
			}

			const fetchData = await fetch(
				`https://pokeapi.co/api/v2/pokemon-species/${guess[guessNumber].value.toLowerCase()}`
			);

			// @ts-ignore
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
				// @ts-ignore
				.catch((err) => {
					const box = document.getElementById(`guess${guessNumber}`);
					// @ts-ignore
					box.classList.add('animate-shake');
					// @ts-ignore
					box.addEventListener('animationend', function (e) {
						// @ts-ignore
						box.classList.remove('animate-shake');
					});
					return;
				});
		}
	}
</script>

<div class="flex items-center justify-center">
	<form id="guesses" aria-label="Submit a guess">
        {#each guess as item, i}
            <Input 
                id={`guess${i}`}
                placeholder={`Guess #${i+1}`}
                class={`max-w-xs bg-${guess[i].howClose}-300 mb-1`}
                bind:value={guess[i].value}
                disabled={guessNumber !== i || guessedCorrectly}
                onkeydown={(e) => updateGuess(e)}
                list="pokemon-names"
            />
        {/each}
        <datalist id="pokemon-names">
            {#each pokemonNames as poke, i}
                <option value={poke.name}></option>
            {/each}
        </datalist>
	</form>
</div>
