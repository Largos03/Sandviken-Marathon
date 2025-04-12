<script>
  import { fade, fly, scale } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { 
    faCalendarAlt, 
    faMapMarkerAlt, 
    faMedal,
    faRunning,
    faChevronRight,
    faClock
  } from '@fortawesome/free-solid-svg-icons';
  
  let visible = false;
  
  // Countdown timer variables
  const marathonDate = new Date('April 1, 2026 08:00:00').getTime();
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let countdownInterval;
  
  function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = marathonDate - now;
    
    if (timeRemaining > 0) {
      days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    } else {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
      clearInterval(countdownInterval);
    }
  }
  
  onMount(() => {
    visible = true;
    
    // Initialize countdown timer
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
    
    // Clean up interval on component unmount
    return () => {
      clearInterval(countdownInterval);
    };
  });
</script>

<!-- Hero Section -->
<section class="hero-section">
  <div class="hero-overlay"></div>
  <div class="hero-content" class:visible>
    <div class="hero-badge">Official Event</div>
    <h1>SANDVIKEN MARATHON</h1>
    <div class="date-badge">
      <FontAwesomeIcon icon={faCalendarAlt} />
      <span>Apr 01, 2026</span>
    </div>
    <p class="hero-subtitle">Experience the beauty of Sandviken in this unforgettable running event</p>
    <div class="hero-cta">
      <a href="/register" class="cta-button primary">Register Now</a>
      <a href="/course" class="cta-button secondary">View Course</a>
    </div>
    <div class="countdown-timer">
      <div class="countdown-item">
        <span class="count">{days.toString().padStart(2, '0')}</span>
        <span class="label">Days</span>
      </div>
      <div class="countdown-item">
        <span class="count">{hours.toString().padStart(2, '0')}</span>
        <span class="label">Hours</span>
      </div>
      <div class="countdown-item">
        <span class="count">{minutes.toString().padStart(2, '0')}</span>
        <span class="label">Minutes</span>
      </div>
      <div class="countdown-item">
        <span class="count">{seconds.toString().padStart(2, '0')}</span>
        <span class="label">Seconds</span>
      </div>
    </div>
  </div>
  <div class="scroll-indicator">
    <span class="mouse">
      <span class="wheel"></span>
    </span>
  </div>
</section>

<!-- Event Details Section -->
<section class="info-section" class:visible>
  <div class="container">
    <div class="section-header">
      <h2>The Premier Running Event in Sweden</h2>
      <div class="section-divider"></div>
      <p class="section-intro">Join thousands of runners from around the world in this prestigious marathon through Sandviken's most scenic routes</p>
    </div>
    
    <div class="feature-cards">
      <div class="feature-card">
        <div class="card-content">
          <div class="feature-icon">
            <FontAwesomeIcon icon={faRunning} />
          </div>
          <h3>Race Categories</h3>
          <p>Choose from Full Marathon (42.2km), Half Marathon (21.1km), or 10K Race</p>
        </div>
        <a href="/register" class="feature-link">
          <span>View Categories</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </div>
      
      <div class="feature-card">
        <div class="card-content">
          <div class="feature-icon">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <h3>Scenic Route</h3>
          <p>Run through picturesque landscapes and iconic landmarks in Sandviken</p>
        </div>
        <a href="/course" class="feature-link">
          <span>Explore Route</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </div>
      
      <div class="feature-card">
        <div class="card-content">
          <div class="feature-icon">
            <FontAwesomeIcon icon={faMedal} />
          </div>
          <h3>Prizes & Awards</h3>
          <p>Exclusive medals for all finishers and special prizes for top performers</p>
        </div>
        <a href="/about" class="feature-link">
          <span>Learn More</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Course Preview Section -->
<section class="course-section" class:visible>
  <div class="container">
    <div class="section-header">
      <h2>The Course</h2>
      <div class="section-divider"></div>
    </div>
    
    <div class="course-grid">
      <div class="course-content">
        <p class="course-intro">
          Experience a scenic route that showcases the beauty of Sandviken, passing iconic landmarks and picturesque landscapes. Our carefully designed course offers a perfect balance of challenge and enjoyment.
        </p>
        
        <div class="course-features">
          <div class="course-feature">
            <div class="feature-bullet"></div>
            <span>AIMS/IAAF certified route</span>
          </div>
          <div class="course-feature">
            <div class="feature-bullet"></div>
            <span>8 hydration stations along the route</span>
          </div>
          <div class="course-feature">
            <div class="feature-bullet"></div>
            <span>Mostly flat terrain with gentle elevation</span>
          </div>
          <div class="course-feature">
            <div class="feature-bullet"></div>
            <span>Medical support throughout the course</span>
          </div>
        </div>
        
        <a href="/course" class="course-btn">View Detailed Map</a>
      </div>
      
      <div class="course-map">
        <img src="/sandviken-map.jpg" alt="Map of Sandviken Marathon Course" />
        <div class="map-overlay">
          <div class="map-stat">
            <span class="stat-value">42.2</span>
            <span class="stat-label">KM</span>
          </div>
          <div class="map-stat">
            <span class="stat-value">135</span>
            <span class="stat-label">M ELEVATION</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Past Results Section -->
<section class="results-section" class:visible>
  <div class="container">
    <div class="section-header">
      <h2>Inaugural Event</h2>
      <div class="section-divider"></div>
      <p class="section-intro">Be part of history in the first-ever Sandviken Marathon</p>
    </div>
    
    <div class="results-slider">
      <div class="result-year-badge">2026</div>
      <h3>Don't Miss This Historic Opportunity</h3>
      <p>Join us for the inaugural Sandviken Marathon and become one of our founding participants. Limited spots available.</p>
      
      <div class="inaugural-highlights">
        <div class="highlight-item">
          <h4>Premium Experience</h4>
          <p>Professional timing, live tracking and full route support</p>
        </div>
        <div class="highlight-item">
          <h4>Special Recognition</h4>
          <p>Exclusive founding participant medal and certificate</p>
        </div>
      </div>
    </div>
    
    <div class="results-action">
      <a href="/register" class="view-all-btn">Register Now</a>
    </div>
  </div>
</section>

<!-- Registration CTA -->
<section class="cta-section" class:visible>
  <div class="container">
    <div class="cta-content">
      <div class="cta-badge">Limited Spots</div>
      <h2>Secure Your Spot Today</h2>
      <p>Registration is open with early bird prices until October 31, 2025</p>
      <a href="/register" class="register-btn">Register Now</a>
    </div>
  </div>
</section>

<style>
  @import './home.css';
  
  /* Styles for FontAwesome icons in Svelte components */
  .date-badge :global(svg) {
    margin-right: 0.75rem;
  }
  
  .feature-link :global(svg) {
    margin-left: 0.5rem;
    font-size: 0.875rem;
    transition: transform 0.2s ease;
  }
  
  .feature-link:hover :global(svg) {
    transform: translateX(5px);
  }
  
  .winner-time :global(svg) {
    margin-right: 0.75rem;
    opacity: 0.7;
  }
</style>