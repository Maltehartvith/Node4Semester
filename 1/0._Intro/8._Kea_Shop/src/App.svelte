<script>
	import { Router, Link, Route } from "svelte-navigator";
	import Home from "./pages/Home/Home.svelte"
	import About from "./pages/About/About.svelte"

</script>

<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
	</nav>

	<Route path="/about" component={About}></Route>
	<Route path="/" component={Home}></Route>

</Router>

<style>
	nav{
		width: 100%;
	}
</style>