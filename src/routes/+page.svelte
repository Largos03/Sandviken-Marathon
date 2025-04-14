<script lang="ts">
  import { onMount } from 'svelte';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { 
    faCalendarAlt, 
    faMapMarkerAlt, 
    faMedal,
    faRunning,
    faChevronRight
  } from '@fortawesome/free-solid-svg-icons';
  import { language, translations } from '$lib/stores/i18n.js';
  
  // Accept data from page.server.js
  export const data = {};
  
  let visible = false;
  
  // Countdown timer variables
  const marathonDate = new Date('April 1, 2026 08:00:00').getTime();
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let countdownInterval: ReturnType<typeof setInterval> | null = null;
  
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
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
    }
  }
  
  onMount(() => {
    visible = true;
    
    // Initialize countdown timer
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
    
    // Clean up interval on component unmount
    return () => {
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
    };
  });
  
  // Get translation based on current language
  $: t = (key: string) => {
    const currentLang = $language as keyof typeof translations;
    
    if (!translations[currentLang] || !translations[currentLang][key as keyof (typeof translations)[typeof currentLang]]) {
      // Fallback to English or just the key itself if not found
      return translations['en']?.[key as keyof (typeof translations)['en']] || key;
    }
    return translations[currentLang][key as keyof (typeof translations)[typeof currentLang]];
  };
</script>

<!-- Hero Section -->
<section class="hero-section">
  <div class="hero-overlay"></div>
  <div class="hero-content" class:visible>
    <div class="hero-badge bg-gray-100 text-gray-900">{t('officialEvent')}</div>
    <h1>{t('marathon')}</h1>
    <div class="date-badge bg-gray-100 text-gray-900">
      <FontAwesomeIcon icon={faCalendarAlt} style="margin-right: 0.75rem;" />
      <span>{t('eventDate')}</span>
    </div>
    <p class="hero-subtitle">{t('heroSubtitle')}</p>
    <div class="hero-cta">
      <a href="/register" class="cta-button primary">{t('registerNow')}</a>
      <a href="/course" class="cta-button secondary">{t('viewCourse')}</a>
    </div>
    <div class="countdown-timer">
      <div class="countdown-item">
        <span class="count">{days.toString().padStart(2, '0')}</span>
        <span class="label">{t('days')}</span>
      </div>
      <div class="countdown-item">
        <span class="count">{hours.toString().padStart(2, '0')}</span>
        <span class="label">{t('hours')}</span>
      </div>
      <div class="countdown-item">
        <span class="count">{minutes.toString().padStart(2, '0')}</span>
        <span class="label">{t('minutes')}</span>
      </div>
      <div class="countdown-item">
        <span class="count">{seconds.toString().padStart(2, '0')}</span>
        <span class="label">{t('seconds')}</span>
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
      <h2>{t('premierEvent')}</h2>
      <div class="section-divider"></div>
      <p class="section-intro">{t('joinThousands')}</p>
    </div>
    
    <div class="feature-cards">
      <div class="feature-card">
        <div class="card-content">
          <div class="feature-icon">
            <FontAwesomeIcon icon={faRunning} />
          </div>
          <h3>{t('raceCategories')}</h3>
          <p>{t('raceDescription')}</p>
        </div>
        <a href="/register" class="feature-link">
          <span>{t('viewCategories')}</span>
          <FontAwesomeIcon icon={faChevronRight} style="margin-left: 0.5rem; font-size: 0.875rem; transition: transform 0.2s ease;" />
        </a>
      </div>
      
      <div class="feature-card">
        <div class="card-content">
          <div class="feature-icon">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <h3>{t('scenicRoute')}</h3>
          <p>{t('routeDescription')}</p>
        </div>
        <a href="/course" class="feature-link">
          <span>{t('exploreRoute')}</span>
          <FontAwesomeIcon icon={faChevronRight} style="margin-left: 0.5rem; font-size: 0.875rem; transition: transform 0.2s ease;" />
        </a>
      </div>
      
      <div class="feature-card">
        <div class="card-content">
          <div class="feature-icon">
            <FontAwesomeIcon icon={faMedal} />
          </div>
          <h3>{t('prizesAwards')}</h3>
          <p>{t('prizesDescription')}</p>
        </div>
        <a href="/about" class="feature-link">
          <span>{t('learnMore')}</span>
          <FontAwesomeIcon icon={faChevronRight} style="margin-left: 0.5rem; font-size: 0.875rem; transition: transform 0.2s ease;" />
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Course Preview Section -->
<section class="course-section" class:visible>
  <div class="container">
    <div class="section-header">
      <h2>{t('theCourse')}</h2>
      <div class="section-divider"></div>
    </div>
    
    <div class="course-grid">
      <div class="course-content">
        <p class="course-intro">
          {t('courseIntro')}
        </p>
        
        <div class="course-features">
          <div class="course-feature">
            <div class="feature-bullet"></div>
            <span>{t('certifiedRoute')}</span>
          </div>
          <div class="course-feature">
            <div class="feature-bullet"></div>
            <span>{t('hydrationStations')}</span>
          </div>
          <div class="course-feature">
            <div class="feature-bullet"></div>
            <span>{t('flatTerrain')}</span>
          </div>
          <div class="course-feature">
            <div class="feature-bullet"></div>
            <span>{t('medicalSupport')}</span>
          </div>
        </div>
        
        <a href="/course" class="course-btn">{t('viewDetailedMap')}</a>
      </div>
      
      <div class="course-map">
        <img src="/sandviken-map.jpg" alt="Map of Sandviken Marathon Course" />
        <div class="map-overlay">
          <div class="map-stat">
            <span class="stat-value">42.2</span>
            <span class="stat-label">KM</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Inaugural Event Section -->
<section class="results-section" class:visible>
  <div class="container">
    <div class="section-header">
      <h2>{t('inauguralEvent')}</h2>
      <div class="section-divider"></div>
      <p class="section-intro">{t('bePartOf')}</p>
    </div>
    
    <div class="results-slider">
      <div class="result-year-badge">2026</div>
      <h3>{t('historicOpportunity')}</h3>
      <p>{t('joinUs')}</p>
      
      <div class="inaugural-highlights">
        <div class="highlight-item" style="text-align: center; display: flex; flex-direction: column; align-items: center;">
          <h4 style="width: 100%; text-align: center;">{t('premiumExperience')}</h4>
          <p style="width: 100%; text-align: center;">{t('experienceDescription')}</p>
        </div>
        <div class="highlight-item" style="text-align: center; display: flex; flex-direction: column; align-items: center;">
          <h4 style="width: 100%; text-align: center;">{t('foundingStatus')}</h4>
          <p style="width: 100%; text-align: center;">{t('foundingDescription')}</p>
        </div>
      </div>
    </div> 
    <div class="results-action">
      <a href="/register" class="view-all-btn">{t('secureSpot')}</a>
    </div>
  </div>
</section>

<!-- Registration CTA -->
<section class="cta-section" class:visible>
  <div class="container">
    <div class="cta-content">
      <div class="cta-badge">{t('limitedSpots')}</div>
      <h2>{t('secureSpotToday')}</h2>
      <p>{t('earlyBird')}</p>
      <a href="/register" class="register-btn">{t('learnMore')}</a>
    </div>
  </div>
</section>

<!-- svelte-ignore css-unused-selector -->
<style>
  @import './home.css';
</style>