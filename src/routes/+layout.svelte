<script>
	import "./style.css";
  </script>
  
  <header>
	<nav>
	  <div class="logo">
		<a href="/">
		  <img src="/Logo.webp" alt="Sandviken Marathon Logo" />
		</a>
	  </div>
	  <ul class="menu">
		<li><a href="/">Home</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/course">Course</a></li>
		<li><a href="/register">Register</a></li>
		<li><a href="/results">Results</a></li>
		<li><a href="/contact">Contact</a></li>
	  </ul>
	</nav>
  </header>
  
  <main>
	<slot />
  </main>
  
  <footer>
	<p>&copy; 2025 Stockholm Marathon. All rights reserved.</p>
  </footer>
  