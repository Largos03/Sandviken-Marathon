<script>
	import "./style.css";
	import "../app.css";
	import { Navbar } from "$lib";
</script>

<Navbar />

<main>
	<slot />
</main>

<footer>
	<p>&copy; 2025 Sandviken Marathon. All rights reserved.</p>
</footer>
  