<script lang="ts">
    import { language, translations } from '$lib/stores/i18n.js';
    import { fade } from 'svelte/transition';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { 
        faMapMarkedAlt, 
        faMountain, 
        faWater, 
        faTree, 
        faFlagCheckered,
        faTint,
        faClock,
        faInfoCircle
    } from '@fortawesome/free-solid-svg-icons';
    
    // Type definitions for translations
    type Language = 'en' | 'sv';
    type TranslationKeys = keyof typeof translations.en;
    
    // Direct translation function with proper typing
    $: t = (key: TranslationKeys): string => {
        const currentLang = $language as Language;
        if (!translations[currentLang] || !translations[currentLang][key]) {
            return key;
        }
        return translations[currentLang][key];
    };
</script>

<svelte:head>
    <title>{t('coursePageTitle')} | Sandviken Marathon</title>
    <meta name="description" content={t('courseDescription')} />
</svelte:head>

<div class="course-page" in:fade>
    <div class="hero-section">
        <div class="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('coursePageTitle')}</h1>
            <div class="w-32 h-1 bg-white mb-8 transform -skew-x-12"></div>
            <p class="text-xl md:text-2xl max-w-3xl leading-relaxed font-light">{t('coursePageIntro')}</p>
        </div>
    </div>
    
    <main class="course-content">
        <div class="container mx-auto px-4 py-8 md:py-16">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                <!-- Course Details Section -->
                <section class="course-details">
                    <div class="content-card">
                        <h2 class="section-title">{t('courseDetailsTitle')}</h2>
                        <p class="text-lg mb-6">{t('courseDescription')}</p>
                        
                        <div class="highlights-section">
                            <h3 class="subsection-title">{t('courseHighlights')}</h3>
                            <div class="highlights-grid">
                                <div class="highlight-item">
                                    <div class="highlight-icon">
                                        <FontAwesomeIcon icon={faFlagCheckered} />
                                    </div>
                                    <div class="highlight-content">
                                        <h4>{t('startFinish')}</h4>
                                    </div>
                                </div>
                                <div class="highlight-item">
                                    <div class="highlight-icon">
                                        <FontAwesomeIcon icon={faWater} />
                                    </div>
                                    <div class="highlight-content">
                                        <h4>{t('scenicWaterfront')}</h4>
                                    </div>
                                </div>
                                <div class="highlight-item">
                                    <div class="highlight-icon">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                                    </div>
                                    <div class="highlight-content">
                                        <h4>{t('historicNeighborhoods')}</h4>
                                    </div>
                                </div>
                                <div class="highlight-item">
                                    <div class="highlight-icon">
                                        <FontAwesomeIcon icon={faTree} />
                                    </div>
                                    <div class="highlight-content">
                                        <h4>{t('forestViews')}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="aid-stations-section">
                            <h3 class="subsection-title">{t('aidStations')}</h3>
                            <div class="aid-stations-grid">
                                <div class="aid-station-item">
                                    <div class="aid-icon">
                                        <FontAwesomeIcon icon={faTint} />
                                    </div>
                                    <div class="aid-content">
                                        <h4>{t('waterStations')}</h4>
                                        <p>{t('waterStationDetails')}</p>
                                    </div>
                                </div>
                                <div class="aid-station-item">
                                    <div class="aid-icon">
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                    </div>
                                    <div class="aid-content">
                                        <h4>{t('medicalStations')}</h4>
                                        <p>{t('medicalStationDetails')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- Course Map Section -->
                <section class="course-map">
                    <div class="content-card">
                        <h2 class="section-title">{t('courseMap')}</h2>
                        <div class="map-container">
                            <!-- Placeholder for current image/future animation -->
                            <div class="map-placeholder">
                                <img 
                                    src="/sandviken-map.jpg" 
                                    alt={t('courseMapAlt')} 
                                    class="course-image"
                                />
                            </div>
                        </div>
                        
                        <div class="elevation-profile">
                            <h3 class="subsection-title">{t('elevationProfile')}</h3>
                            <div class="profile-container">
                                <div class="profile-placeholder">
                                    <div class="profile-icon">
                                        <FontAwesomeIcon icon={faMountain} />
                                    </div>
                                    <p>{t('elevationProfilePlaceholder')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
            <!-- Race Day Information -->
            <section class="race-day-info">
                <div class="content-card">
                    <h2 class="section-title">{t('raceDayInfo')}</h2>
                    <div class="info-grid">
                        <div class="info-item">
                            <div class="info-icon">
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <div class="info-content">
                                <h3>{t('startTime')}</h3>
                                <p>{t('startTimeDetails')}</p>
                            </div>
                        </div>
                        <div class="info-item">
                            <div class="info-icon">
                                <FontAwesomeIcon icon={faMapMarkedAlt} />
                            </div>
                            <div class="info-content">
                                <h3>{t('startLocation')}</h3>
                                <p>{t('startLocationDetails')}</p>
                            </div>
                        </div>
                    </div>
                    <p class="race-day-details">{t('raceDayDetails')}</p>
                </div>
            </section>
        </div>
    </main>
</div>

<style>
    .course-page {
        background-color: #fafafa;
        min-height: 100vh;
    }
    
    .hero-section {
        background-color: #000;
        color: rgba(255, 255, 255, 0.95);
        padding: 2.5rem 0;
        position: relative;
        overflow: hidden;
    }
    
    .course-content {
        margin-top: -2rem;
        position: relative;
        z-index: 1;
    }
    
    .content-card {
        background-color: white;
        border-radius: 1rem;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        padding: 2rem;
        margin-bottom: 2rem;
    }
    
    .section-title {
        font-size: 1.75rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        color: #111827;
    }
    
    .subsection-title {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #111827;
    }
    
    .highlights-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
    }
    
    .highlight-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
        border-radius: 0.75rem;
        border: 1px solid rgba(0,0,0,0.1);
    }
    
    .highlight-icon {
        width: 2.5rem;
        height: 2.5rem;
        background-color: #000;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    
    .highlight-content h4 {
        font-weight: 500;
        color: #111827;
    }
    
    .aid-stations-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    @media (min-width: 640px) {
        .aid-stations-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    
    .aid-station-item {
        display: flex;
        gap: 1rem;
        padding: 1.5rem;
        background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
        border-radius: 0.75rem;
        border: 1px solid rgba(0,0,0,0.1);
    }
    
    .aid-icon {
        width: 2.5rem;
        height: 2.5rem;
        background-color: #000;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    
    .aid-content h4 {
        font-weight: 500;
        margin-bottom: 0.5rem;
        color: #111827;
    }
    
    .aid-content p {
        color: #4b5563;
        font-size: 0.95rem;
        line-height: 1.5;
    }
    
    .map-container {
        margin-bottom: 2rem;
        border-radius: 0.75rem;
        overflow: hidden;
    }
    
    .map-placeholder {
        position: relative;
        background-color: #f3f4f6;
        border-radius: 0.75rem;
        overflow: hidden;
    }
    
    .course-image {
        width: 100%;
        height: auto;
        display: block;
    }
    
    .elevation-profile {
        margin-top: 2rem;
    }
    
    .profile-container {
        background-color: #f3f4f6;
        border-radius: 0.75rem;
        padding: 2rem;
        text-align: center;
    }
    
    .profile-placeholder {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        color: #6b7280;
    }
    
    .profile-icon {
        font-size: 2rem;
    }
    
    .info-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
        margin-bottom: 1.5rem;
    }
    
    @media (min-width: 640px) {
        .info-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    
    .info-item {
        display: flex;
        gap: 1rem;
        padding: 1.5rem;
        background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
        border-radius: 0.75rem;
        border: 1px solid rgba(0,0,0,0.1);
    }
    
    .info-icon {
        width: 2.5rem;
        height: 2.5rem;
        background-color: #000;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    
    .info-content h3 {
        font-weight: 500;
        margin-bottom: 0.5rem;
        color: #111827;
    }
    
    .info-content p {
        color: #4b5563;
        font-size: 0.95rem;
        line-height: 1.5;
    }
    
    .race-day-details {
        color: #4b5563;
        line-height: 1.6;
    }
    
    @media (max-width: 768px) {
        .hero-section {
            padding: 2rem 0;
        }
        
        .hero-section h1 {
            font-size: 2.5rem;
        }
        
        .content-card {
            padding: 1.5rem;
        }
    }
</style> 