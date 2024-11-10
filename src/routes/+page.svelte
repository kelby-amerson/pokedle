<script>
	import Body from './Body.svelte';
    
    /** @type {{ data: import('./$types').PageServerData }} */
	let { data } = $props();
    console.log("data", data)
</script>

<Body pokemon={data}/>
