<script>
	import { Input } from '$lib/components/ui/input';

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
		<Input
			id="guess0"
			placeholder="Guess #1"
			class={`max-w-xs bg-${guess[0].howClose}-300 mb-1`}
			bind:value={guess[0].value}
			disabled={guessNumber !== 0 || guessedCorrectly}
			onkeydown={(e) => updateGuess(e)}
		/>
		<Input
			id="guess1"
			placeholder="Guess #2"
			class={`max-w-xs bg-${guess[1].howClose}-300 mb-1`}
			bind:value={guess[1].value}
			disabled={guessNumber !== 1 || guessedCorrectly}
			onkeydown={(e) => updateGuess(e)}
		/>
		<Input
			id="guess2"
			placeholder="Guess #3"
			class={`max-w-xs bg-${guess[2].howClose}-300 mb-1`}
			bind:value={guess[2].value}
			disabled={guessNumber !== 2 || guessedCorrectly}
			onkeydown={(e) => updateGuess(e)}
		/>
		<Input
			id="guess3"
			placeholder="Guess #4"
			class={`max-w-xs bg-${guess[3].howClose}-300 mb-1`}
			bind:value={guess[3].value}
			disabled={guessNumber !== 3 || guessedCorrectly}
			onkeydown={(e) => updateGuess(e)}
		/>
		<Input
			id="guess4"
			placeholder="Guess #5"
			class={`max-w-xs bg-${guess[4].howClose}-300`}
			bind:value={guess[4].value}
			disabled={guessNumber !== 4 || guessedCorrectly}
			onkeydown={(e) => updateGuess(e)}
		/>
	</form>
</div>
