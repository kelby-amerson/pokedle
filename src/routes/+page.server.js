export const prerender = true;
/** @type {import('./$types').PageServerLoad} */
export async function load ({ fetch }){
    /**
	 * @param {number} max
	 */
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const random = getRandomInt(1026);
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`);
    const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${random}/`)
	const pokemonObj = await res.json();
    const speciesObj = await res2.json();

	return { pokemonObj, speciesObj };
};