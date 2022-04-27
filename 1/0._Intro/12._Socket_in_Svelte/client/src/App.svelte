<script>
	import UserRegistration from "./Pages/UserRegistration/UserRegistration.svelte";
	import Logout from "./Pages/UserRegistration/Logout.svelte"
	import Colors from "./Pages/Colors/Colors.svelte"
	import { onMount } from "svelte";

	let username; 

	onMount(async () => {
		const response = await fetch("/api/fetchUser");
		const { data } = await response.json();
		username = data;
	})
	
</script>

<main>
	{#if username}
	<Colors />
	{:else}
	<h1>Hello Fella!</h1>
	<UserRegistration/>
	{/if}
	
	<Logout />
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
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