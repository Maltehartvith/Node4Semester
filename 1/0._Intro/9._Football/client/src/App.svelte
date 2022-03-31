<script>
	import { onMount } from "svelte";
	// import { baseURL } from "../store/gStore.js";

	let players = "";
	onMount ( async () => {
		const response = await fetch("/api/players")
		const { data:playersArray } = await response.json();
		players = playersArray;
	})
</script>

<main>
	<h1>Page content</h1>
	<h2>{JSON.stringify(players)}</h2>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		min-height: calc(100vh - 3.7em);
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>