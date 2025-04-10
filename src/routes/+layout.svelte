<script>
	import "./style.css";
	import "../app.css";
	import { Navbar } from "$lib";
</script>

<div class="flex flex-col min-h-screen">
	<Navbar />
	
	<main class="flex-grow">
		<slot />
	</main>
	
	<footer class="bg-gray-900 text-white py-6 mt-auto">
		<div class="container mx-auto px-4 text-center">
			<p>&copy; 2025 Sandviken Marathon. All rights reserved.</p>
		</div>
	</footer>
</div>
  