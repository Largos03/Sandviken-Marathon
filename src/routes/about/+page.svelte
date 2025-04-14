<script lang="ts">
  import { language, translations } from '$lib/stores/i18n.js';
  import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
  import { 
    faTrophy, 
    faUsers, 
    faMapMarkerAlt, 
    faCalendarAlt,
    faHeart,
    faMedal
  } from '@fortawesome/free-solid-svg-icons';
  
  // Define types for better TypeScript support
  type Language = 'en' | 'sv';
  
  // Define a type for the translations object
  type TranslationObject = {
    [key: string]: string;
  };
  
  // Direct translation function with proper typing
  $: t = (key: string): string => {
    const currentLang = $language as Language;
    const currentTranslations = translations[currentLang] as TranslationObject;
    
    if (!currentTranslations || !currentTranslations[key]) {
      return key;
    }
    return currentTranslations[key];
  };
</script>

<div class="about-page">
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="container">
      <h1>{t('aboutTitle')}</h1>
      <p class="hero-text">{t('aboutIntro')}</p>
    </div>
  </section>

  <!-- Mission Section -->
  <section class="content-section">
    <div class="container">
      <div class="mission-card">
        <div class="icon-container">
          <Fa icon={faHeart} />
        </div>
        <h2>{t('aboutMission')}</h2>
        <p>Welcome to the Sandviken Marathon, a premier running event that brings together athletes, enthusiasts, and the community in a celebration of endurance, determination, and achievement. Our mission is to promote health, fitness, and community spirit through the power of running.</p>
      </div>
    </div>
  </section>

  <!-- History Section -->
  <section class="content-section alt-section">
    <div class="container">
      <div class="section-header">
        <h2>{t('aboutHistoryTitle')}</h2>
      </div>
      <div class="info-card">
        <div class="icon-container">
          <Fa icon={faTrophy} />
        </div>
        <p>{t('aboutHistoryDesc')}</p>
        <p>Since our inception, the Sandviken Marathon has grown from a small local event to a nationally recognized race. We've welcomed thousands of runners, created countless memories, and supported numerous charitable causes. Our journey is a testament to the passion and dedication of our community.</p>
      </div>
    </div>
  </section>

  <!-- Values Section -->
  <section class="content-section">
    <div class="container">
      <div class="section-header">
        <h2>{t('aboutValuesTitle')}</h2>
      </div>
      <div class="values-grid">
        <div class="value-item">
          <div class="icon-container">
            <Fa icon={faUsers} />
          </div>
          <h3>Community</h3>
          <p>Building connections and fostering a supportive environment for all participants.</p>
        </div>
        <div class="value-item">
          <div class="icon-container">
            <Fa icon={faMedal} />
          </div>
          <h3>Excellence</h3>
          <p>Striving for the highest standards in event organization and participant experience.</p>
        </div>
        <div class="value-item">
          <div class="icon-container">
            <Fa icon={faHeart} />
          </div>
          <h3>Inclusivity</h3>
          <p>Welcoming runners of all abilities and backgrounds to join our community.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Event Details Section -->
  <section class="content-section alt-section">
    <div class="container">
      <div class="section-header">
        <h2>{t('eventDetailsTitle')}</h2>
      </div>
      <div class="details-grid">
        <div class="detail-item">
          <div class="icon-container">
            <Fa icon={faCalendarAlt} />
          </div>
          <h3>Date & Time</h3>
          <p>Join us on the first Saturday of June for a day of running, celebration, and community spirit.</p>
        </div>
        <div class="detail-item">
          <div class="icon-container">
            <Fa icon={faMapMarkerAlt} />
          </div>
          <h3>Location</h3>
          <p>The race takes place in the beautiful city of Sandviken, featuring scenic routes through parks and along the waterfront.</p>
        </div>
      </div>
      <p class="details-text">{t('eventDetailsDesc')}</p>
    </div>
  </section>

  <!-- Community Section -->
  <section class="content-section">
    <div class="container">
      <div class="section-header">
        <h2>{t('aboutCommunityTitle')}</h2>
      </div>
      <div class="info-card">
        <p>{t('aboutCommunityDesc')}</p>
        <p>The Sandviken Marathon is more than just a race—it's a celebration of our community. We bring together runners, volunteers, spectators, and local businesses to create an unforgettable experience. Our event supports local charities and initiatives, making a positive impact beyond the finish line.</p>
      </div>
    </div>
  </section>

  <!-- Future Vision Section -->
  <section class="content-section alt-section">
    <div class="container">
      <div class="section-header">
        <h2>{t('aboutFutureTitle')}</h2>
      </div>
      <div class="info-card">
        <p>{t('aboutFutureDesc')}</p>
        <p>As we look to the future, our vision is to continue growing the Sandviken Marathon while maintaining its community spirit and commitment to excellence. We aim to introduce new race categories, enhance the participant experience, and expand our charitable impact. Join us on this journey as we write the next chapter of our marathon's story.</p>
      </div>
    </div>
  </section>
</div>

<style>
  .about-page {
    background-color: #f8f8f8;
    color: #333;
  }

  .hero-section {
    background-color: #000;
    color: #fff;
    padding: 4rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.1;
  }

  .hero-section .container {
    position: relative;
    z-index: 1;
  }

  .hero-section h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #fff;
  }

  .hero-text {
    font-size: 1.25rem;
    max-width: 800px;
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.9);
  }

  .content-section {
    padding: 4rem 0;
  }

  .alt-section {
    background-color: #f0f0f0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .section-header h2 {
    font-size: 2.25rem;
    font-weight: 700;
    color: #000;
    position: relative;
    display: inline-block;
  }

  .section-header h2::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: #000;
  }

  .mission-card {
    background-color: #fff;
    border-radius: 8px;
    padding: 2.5rem;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    max-width: 800px;
    margin: 0 auto;
  }

  .mission-card h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 1.5rem 0;
    color: #000;
  }

  .mission-card p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: #555;
  }

  .info-card {
    background-color: #fff;
    border-radius: 8px;
    padding: 2.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    margin-bottom: 2rem;
  }

  .info-card p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 1.5rem;
  }

  .info-card p:last-child {
    margin-bottom: 0;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .value-item {
    background-color: #fff;
    border-radius: 8px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .value-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }

  .value-item h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1rem 0;
    color: #000;
  }

  .value-item p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
  }

  .details-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .detail-item {
    background-color: #fff;
    border-radius: 8px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .detail-item h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1rem 0;
    color: #000;
  }

  .detail-item p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
  }

  .details-text {
    font-size: 1.125rem;
    line-height: 1.6;
    color: #555;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: #f0f0f0;
    border-radius: 50%;
    margin: 0 auto 1rem;
  }

  .icon-container :global(svg) {
    width: 30px;
    height: 30px;
    color: #000;
  }

  @media (max-width: 768px) {
    .hero-section {
      padding: 3rem 0;
    }

    .hero-section h1 {
      font-size: 2.25rem;
    }

    .hero-text {
      font-size: 1.125rem;
    }

    .content-section {
      padding: 3rem 0;
    }

    .section-header h2 {
      font-size: 1.75rem;
    }

    .mission-card, .info-card {
      padding: 2rem;
    }

    .value-item, .detail-item {
      padding: 1.5rem;
    }
  }
</style> 