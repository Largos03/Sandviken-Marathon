<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { 
    faCalendarAlt, 
    faMapMarkerAlt, 
    faMedal,
    faRunning,
    faChevronRight,
    faClock,
    faInfoCircle,
    faArrowRight,
    faStar,
    faMapMarkedAlt,
    faUsers,
    faHeart
  } from '@fortawesome/free-solid-svg-icons';
  import { language, tStore } from '$lib/stores/i18n.js';
  import { Card, CardContent } from '$lib/components/ui/card';
  import Button from '$lib/components/Button.svelte';
  
  // Accept data from page.server.js
  export const data: { lang?: string } = { lang: 'en' };
  
  let visible = false;
  let activeSection = 'overview';
  
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
      days = hours = minutes = seconds = 0;
      if (countdownInterval) clearInterval(countdownInterval);
    }
  }
  
  function setActiveSection(section: string) {
    activeSection = section;
  }
  
  onMount(() => {
    visible = true;
    
    // Initialize countdown timer
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
    
    // Clean up interval on component unmount
    return () => {
      if (countdownInterval) clearInterval(countdownInterval);
    };
  });
  
  // Use the derived store for translations
  $: t = $tStore;
  
  // Navigation sections - reactive to translation changes
  $: sections = [
    { id: 'overview', label: t('overviewTab'), icon: faUsers },
    { id: 'course', label: t('courseTab'), icon: faMapMarkedAlt },
    { id: 'details', label: t('detailsTab'), icon: faCalendarAlt },
    { id: 'register', label: t('registerTab'), icon: faMedal }
  ];
</script>

<svelte:head>
  <title>Sandviken Marathon 2026 | Official Event</title>
  <meta name="description" content="Join the inaugural Sandviken Marathon in 2026. A premier running event with a scenic route through the heart of Sweden." />
  <style>
    @keyframes pulse-gentle {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.8; }
    }
    
    .animate-pulse-gentle {
      animation: pulse-gentle 2s infinite ease-in-out;
    }
    
    .text-2xs {
      font-size: 0.65rem;
      line-height: 1rem;
    }
  </style>
</svelte:head>

<!-- Hero Section -->
<div class="relative h-screen bg-black text-white overflow-hidden" in:fade={{ duration: 300 }}>
  <!-- Simplified background -->
  <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85 z-10"></div>
  <div class="absolute inset-0 z-0 bg-cover bg-center" style="background-image: url('/running.gif')"></div>
  
  <!-- Hero content -->
  <div class="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
    {#if visible}
      <!-- Event badge -->
      <div class="mb-8">
        <div class="bg-white text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg flex items-center">
          <FontAwesomeIcon icon={faStar} class="text-red-600 mr-1" size="xs" />
          <span>{t('officialEvent')}</span>
          <FontAwesomeIcon icon={faStar} class="text-red-600 ml-1" size="xs" />
        </div>
      </div>
      
      <!-- Title -->
      <h1 class="text-5xl md:text-7xl font-black uppercase tracking-tight mb-4 leading-tight">
        <div class="flex flex-col items-center">
          <span class="inline-block text-white relative mb-2 tracking-wide">
            SANDVIKEN
            <div class="absolute -left-2 -right-2 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent bottom-1.5"></div>
          </span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white inline-flex items-center relative tracking-wide">
            MARATHON
            <div class="absolute -right-16 -top-1 bg-white text-black text-sm font-bold px-2 py-0.5 rounded transform rotate-12 shadow-xl border-2 border-red-500">2026</div>
          </span>
        </div>
      </h1>
      
      <!-- Distance indicator -->
      <div class="flex justify-center items-center gap-3 mb-8">
        <div class="h-px w-16 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        <div class="bg-red-600 text-white text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-lg">
          <span>42.195 km</span>
        </div>
        <div class="h-px w-16 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      </div>
      
      <!-- Date -->
      <div class="mb-8">
        <div class="flex items-center bg-black/30 backdrop-blur-md text-white px-6 py-3 rounded-xl font-bold border border-white/30 shadow-lg">
          <FontAwesomeIcon icon={faCalendarAlt} class="mr-3 text-red-400" />
          <span>{t('eventDate')}</span>
        </div>
      </div>
      
      <!-- Intro text -->
      <p class="max-w-2xl text-xl md:text-2xl mb-10 text-white/95 font-light leading-relaxed">
        {t('introText')}
      </p>
      
      <!-- Countdown Timer -->
      <div class="mb-12 max-w-lg w-full">
        <!-- Label -->
        <div class="text-center mb-4">
          <div class="inline-block bg-gradient-to-r from-red-600/80 to-red-500/80 px-4 py-1 rounded-xl text-xs font-bold uppercase tracking-widest text-white shadow-lg border border-white/10">
            <FontAwesomeIcon icon={faClock} class="mr-2" />
            {t('raceStartingIn')}
          </div>
        </div>
        
        <!-- Timer -->
        <div class="bg-black/30 backdrop-blur-md p-3 md:p-4 rounded-2xl border border-white/10 shadow-2xl">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-0 md:divide-x divide-gray-700/30">
            <!-- Days -->
            <div class="px-2 md:px-4 py-3">
              <div class="flex flex-col items-center">
                <span class="text-3xl md:text-5xl font-bold text-white/95">{days.toString().padStart(2, '0')}</span>
                <span class="text-xs uppercase tracking-wider text-white/70 mt-1">{t('days')}</span>
              </div>
            </div>
            
            <!-- Hours -->
            <div class="px-2 md:px-4 py-3">
              <div class="flex flex-col items-center">
                <span class="text-3xl md:text-5xl font-bold text-white/95">{hours.toString().padStart(2, '0')}</span>
                <span class="text-xs uppercase tracking-wider text-white/70 mt-1">{t('hours')}</span>
              </div>
            </div>
            
            <!-- Minutes -->
            <div class="px-2 md:px-4 py-3">
              <div class="flex flex-col items-center">
                <span class="text-3xl md:text-5xl font-bold text-white/95">{minutes.toString().padStart(2, '0')}</span>
                <span class="text-xs uppercase tracking-wider text-white/70 mt-1">{t('minutes')}</span>
              </div>
            </div>
            
            <!-- Seconds -->
            <div class="px-2 md:px-4 py-3">
              <div class="flex flex-col items-center">
                <span class="text-3xl md:text-5xl font-bold text-white/95 animate-pulse-gentle">{seconds.toString().padStart(2, '0')}</span>
                <span class="text-xs uppercase tracking-wider text-white/70 mt-1">{t('seconds')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Call to Action -->
      <div>
        <a 
          href="/register" 
          class="px-10 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg rounded-xl shadow-lg inline-flex items-center justify-center focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
        >
          <span class="flex items-center">
            {t('registerNow')}
            <FontAwesomeIcon icon={faArrowRight} class="ml-2" />
          </span>
        </a>
      </div>
    {/if}
  </div>
  
  <!-- Scroll indicator removed to reduce complexity -->
</div>

<!-- Main Content - Simplified -->
<div id="main-content" class="container mx-auto -mt-20 px-4 pb-16 relative z-20">
  <!-- Main content card with simplified styling -->
  <div class="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 relative">
    <!-- Simplified Navigation -->
    <div class="flex justify-center p-4 sticky top-0 z-30 backdrop-blur-lg bg-white/95 border-b border-gray-100 shadow-sm">
      <div class="bg-gray-100 p-1 rounded-xl flex flex-wrap justify-center w-auto md:w-auto">
        {#each sections as section, i}
          <button 
            class="relative px-4 py-2.5 md:px-6 md:py-3 text-sm md:text-base flex items-center
            transition-all duration-300 rounded-lg mx-0.5 font-medium
            {activeSection === section.id ? 'bg-white text-gray-900 shadow-lg' : 'text-gray-700 hover:bg-white/50 hover:shadow-sm'}"
            on:click={() => setActiveSection(section.id)}
            aria-selected={activeSection === section.id}
            role="tab"
          >
            <!-- Simplified active state -->
            {#if activeSection === section.id}
              <div class="absolute inset-x-0 bottom-0 h-0.5 bg-red-500"></div>
            {/if}
            
            <div class="relative z-10 flex items-center">
              <div class="w-8 h-8 rounded-full flex items-center justify-center mr-3 shadow-sm
                {activeSection === section.id 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white text-gray-600'
                }">
                <FontAwesomeIcon icon={section.icon} class="w-3.5 h-3.5 md:w-4 md:h-4" />
              </div>
              <span class="font-medium">{section.label}</span>
            </div>
          </button>
        {/each}
      </div>
    </div>
    
    <div class="min-h-[60vh] p-8 md:p-10 bg-white">
      <!-- Overview Section Content - Simplified Design -->
      {#if activeSection === 'overview'}
        <div in:fade={{ duration: 300 }}>
          <div class="flex items-start flex-col mb-10">
            <div class="inline-block bg-gradient-to-r from-gray-900 to-black text-white px-4 py-2.5 rounded-lg shadow-lg mb-4">
              <span class="font-bold text-lg">{t('inauguralEventTitle')}</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold mb-3 leading-tight">{@html t('bePartOfHistory')}</h2>
            <div class="w-20 h-1.5 bg-red-500 rounded-full mb-6"></div>
            <p class="text-gray-600 text-xl max-w-3xl">
              {t('inauguralDescription')}
            </p>
          </div>
          
          <!-- Content remains the same but with simplified card transitions -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card class="overflow-hidden bg-white border border-gray-100 rounded-xl shadow-md">
              <CardContent class="p-6">
                <div class="w-14 h-14 bg-black text-white rounded-lg flex items-center justify-center shadow-md mb-5">
                  <FontAwesomeIcon icon={faRunning} size="lg" />
                </div>
                <h3 class="text-xl font-bold mb-3">{t('raceCategories')}</h3>
                <p class="text-gray-600 mb-6">{t('raceDescription')}</p>
                <a href="/register" class="inline-flex items-center text-black font-semibold hover:underline mt-auto">
                  <span>{t('viewCategories')}</span>
                  <FontAwesomeIcon icon={faChevronRight} class="ml-2 text-sm" />
                </a>
              </CardContent>
            </Card>
            
            <Card class="overflow-hidden bg-white border border-gray-100 rounded-xl shadow-md">
              <CardContent class="p-6">
                <div class="w-14 h-14 bg-black text-white rounded-lg flex items-center justify-center shadow-md mb-5">
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                </div>
                <h3 class="text-xl font-bold mb-3">{t('scenicRoute')}</h3>
                <p class="text-gray-600 mb-6">{t('routeDescription')}</p>
                <a href="/course" class="inline-flex items-center text-black font-semibold hover:underline mt-auto">
                  <span>{t('exploreRoute')}</span>
                  <FontAwesomeIcon icon={faChevronRight} class="ml-2 text-sm" />
                </a>
              </CardContent>
            </Card>
            
            <Card class="overflow-hidden bg-white border border-gray-100 rounded-xl shadow-md">
              <CardContent class="p-6">
                <div class="w-14 h-14 bg-black text-white rounded-lg flex items-center justify-center shadow-md mb-5">
                  <FontAwesomeIcon icon={faMedal} size="lg" />
                </div>
                <h3 class="text-xl font-bold mb-3">{t('prizesAwards')}</h3>
                <p class="text-gray-600 mb-6">{t('prizesDescription')}</p>
                <a href="/about" class="inline-flex items-center text-black font-semibold hover:underline mt-auto">
                  <span>{t('learnMore')}</span>
                  <FontAwesomeIcon icon={faChevronRight} class="ml-2 text-sm" />
                </a>
              </CardContent>
            </Card>
          </div>
          
          <!-- Race Day Schedule - Simplified Design -->
          <div class="mt-10 relative">
            <div class="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mr-4 shadow-md">
                  <FontAwesomeIcon icon={faClock} size="lg" />
                </div>
                <div>
                  <h3 class="text-2xl font-bold">{t('raceDaySchedule')}</h3>
                  <p class="text-gray-500">{t('raceDayDate')}</p>
                </div>
              </div>
              
              <!-- Rest of the schedule content remains the same -->
              <div class="relative">
                <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-red-500/20"></div>
                
                <div class="space-y-6">
                  <div class="flex items-start relative">
                    <div class="absolute left-4 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full mt-1.5"></div>
                    <div class="pl-10">
                      <div class="text-lg font-bold text-gray-900">{t('raceVillageOpens')}</div>
                      <div class="text-gray-600">{t('raceVillageOpensText')}</div>
                    </div>
                  </div>
                  
                  <div class="flex items-start relative">
                    <div class="absolute left-4 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full mt-1.5"></div>
                    <div class="pl-10">
                      <div class="text-lg font-bold text-gray-900">{t('warmupSession')}</div>
                      <div class="text-gray-600">{t('warmupSessionText')}</div>
                    </div>
                  </div>
                  
                  <div class="flex items-start relative">
                    <div class="absolute left-4 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full mt-1.5 shadow-sm"></div>
                    <div class="pl-10">
                      <div class="text-lg font-bold text-gray-900">{t('marathonStart')}</div>
                      <div class="text-gray-600 font-medium">{t('marathonStartText')}</div>
                    </div>
                  </div>
                  
                  <div class="flex items-start relative">
                    <div class="absolute left-4 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full mt-1.5"></div>
                    <div class="pl-10">
                      <div class="text-lg font-bold text-gray-900">{t('halfMarathonStart')}</div>
                      <div class="text-gray-600">{t('halfMarathonStartText')}</div>
                    </div>
                  </div>
                  
                  <div class="flex items-start relative">
                    <div class="absolute left-4 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full mt-1.5"></div>
                    <div class="pl-10">
                      <div class="text-lg font-bold text-gray-900">{t('tenKStart')}</div>
                      <div class="text-gray-600">{t('tenKStartText')}</div>
                    </div>
                  </div>
                  
                  <div class="flex items-start relative">
                    <div class="absolute left-4 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full mt-1.5"></div>
                    <div class="pl-10">
                      <div class="text-lg font-bold text-gray-900">{t('awardsCeremony')}</div>
                      <div class="text-gray-600">{t('awardsCeremonyText')}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="mt-8 text-center">
                <a href="/course" class="inline-flex items-center justify-center px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors">
                  <span>{t('eventDetailsLink')}</span>
                  <FontAwesomeIcon icon={faChevronRight} class="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      {/if}
      
      <!-- Course Tab -->
      {#if activeSection === 'course'}
        <div in:fade={{ duration: 300 }}>
          <!-- Section Header -->
          <div class="flex items-start flex-col mb-10">
            <div class="inline-block bg-gradient-to-r from-gray-900 to-black text-white px-4 py-2.5 rounded-lg shadow-lg mb-4">
              <span class="font-bold text-lg">{t('scenicRouteTitle')}</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold mb-3 leading-tight">{@html t('breathtakingJourney')}</h2>
            <div class="w-20 h-1.5 bg-red-500 rounded-full mb-6"></div>
            <p class="text-gray-600 text-xl max-w-3xl">
              {t('courseDescription2')}
            </p>
          </div>
          
          <!-- Course Map Section -->
          <div class="mb-16">
            <div class="overflow-hidden rounded-xl shadow-xl bg-white">
              <div class="md:flex">
                <div class="md:w-1/2 p-6 md:p-8">
                  <div class="prose prose-lg prose-gray mb-8 max-w-none">
                    <p class="lead text-gray-700 mb-6">
                      {t('iaafCertified')}
                    </p>
                    
                    <!-- Route Highlights -->
                    <div class="bg-gray-50 p-6 rounded-xl mb-6 border-l-4 border-red-500">
                      <h3 class="font-bold text-xl mb-4">{t('routeHighlights')}</h3>
                      
                      <div class="space-y-4">
                        <!-- Highlight items -->
                        <div class="flex items-start">
                          <div class="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</div>
                          <div>
                            <h4 class="font-semibold text-gray-800">{t('lakesideStart')}</h4>
                            <p class="text-gray-600 text-sm">{t('lakesideStartText')}</p>
                          </div>
                        </div>
                        
                        <div class="flex items-start">
                          <div class="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</div>
                          <div>
                            <h4 class="font-semibold text-gray-800">{t('forestTrail')}</h4>
                            <p class="text-gray-600 text-sm">{t('forestTrailText')}</p>
                          </div>
                        </div>
                        
                        <div class="flex items-start">
                          <div class="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</div>
                          <div>
                            <h4 class="font-semibold text-gray-800">{t('historicDistrict')}</h4>
                            <p class="text-gray-600 text-sm">{t('historicDistrictText')}</p>
                          </div>
                        </div>
                        
                        <div class="flex items-start">
                          <div class="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</div>
                          <div>
                            <h4 class="font-semibold text-gray-800">{t('victoryBoulevard')}</h4>
                            <p class="text-gray-600 text-sm">{t('victoryBoulevardText')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <!-- CTA -->
                    <div class="flex justify-center md:justify-start">
                      <a href="/course" class="inline-flex items-center justify-center px-5 py-2 bg-black text-white rounded-lg">
                        <span>{t('exploreDetailedMap')}</span>
                        <FontAwesomeIcon icon={faChevronRight} class="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <!-- Map image -->
                <div class="md:w-1/2 relative bg-gray-800">
                  <div class="aspect-w-1 aspect-h-1 md:aspect-auto md:h-full">
                    <img 
                      src="/sandviken-map.jpg" 
                      alt="Map of Sandviken Marathon Course" 
                      class="w-full h-full object-cover"
                    />
                    
                    <div class="absolute bottom-6 left-6 z-10">
                      <div class="bg-black/70 backdrop-blur-sm rounded-xl p-5 max-w-xs border border-white/10">
                        <div class="flex items-end mb-3">
                          <div class="text-4xl font-bold text-white">42.2</div>
                          <div class="text-sm uppercase tracking-wider text-white/80 ml-2 mb-1">KM</div>
                        </div>
                        <div class="text-white/80 text-sm">{t('iaafCertifiedLabel')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Course Features -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
            <!-- Time Limit -->
            <div class="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-500">
              <div class="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faClock} size="lg" />
              </div>
              <h3 class="font-bold text-lg mb-2">{t('timeLimit')}</h3>
              <p class="text-gray-600">{t('timeLimitText')}</p>
            </div>
            
            <!-- Aid Stations -->
            <div class="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-500">
              <div class="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
              </div>
              <h3 class="font-bold text-lg mb-2">{t('aidStationsFeature')}</h3>
              <p class="text-gray-600">{t('aidStationsFeatureText')}</p>
            </div>
            
            <!-- Pace Groups -->
            <div class="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-500">
              <div class="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faRunning} size="lg" />
              </div>
              <h3 class="font-bold text-lg mb-2">{t('paceGroups')}</h3>
              <p class="text-gray-600">{t('paceGroupsText')}</p>
            </div>
            
            <!-- Finisher Medal -->
            <div class="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-500">
              <div class="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faMedal} size="lg" />
              </div>
              <h3 class="font-bold text-lg mb-2">{t('finisherMedal')}</h3>
              <p class="text-gray-600">{t('finisherMedalText')}</p>
            </div>
          </div>
        </div>
      {/if}
      
      <!-- Event Details Tab -->
      {#if activeSection === 'details'}
        <div in:fade={{ duration: 300 }}>
          <!-- Section Header -->
          <div class="flex items-start md:items-center flex-col md:flex-row mb-6">
            <div class="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center md:mr-4 shadow-md mb-4 md:mb-0">
              <FontAwesomeIcon icon={faCalendarAlt} size="lg" />
            </div>
            <div>
              <h2 class="text-2xl font-bold">{t('eventDetailsSectionTitle')}</h2>
              <p class="text-gray-500">{t('eventDetailsSubtitle')}</p>
            </div>
          </div>
          
          <!-- Details Cards -->
          <div class="space-y-8 max-w-4xl mx-auto">
            <!-- Event Schedule -->
            <div class="bg-gray-50 p-6 rounded-xl">
              <h3 class="text-xl font-bold mb-4 flex items-center">
                <FontAwesomeIcon icon={faCalendarAlt} class="mr-3 text-red-500" />
                {t('eventSchedule')}
              </h3>
              <div class="space-y-4">
                <div class="bg-white p-4 rounded-lg shadow-sm">
                  <div class="font-bold">{t('preRaceDay')}</div>
                  <div class="text-gray-600">{t('preRaceDayText')}</div>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm">
                  <div class="font-bold">{t('raceDayFull')}</div>
                  <div class="text-gray-600">{t('raceDayFullText')}</div>
                </div>
              </div>
            </div>
            
            <!-- Location Details -->
            <div class="bg-gray-50 p-6 rounded-xl">
              <h3 class="text-xl font-bold mb-4 flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} class="mr-3 text-red-500" />
                {t('locationDetails')}
              </h3>
              <div class="space-y-4">
                <div class="bg-white p-4 rounded-lg shadow-sm">
                  <div class="font-bold">{t('startFinishArea')}</div>
                  <div class="text-gray-600">{t('startFinishAreaText')}</div>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm">
                  <div class="font-bold">{t('raceExpo')}</div>
                  <div class="text-gray-600">{t('raceExpoText')}</div>
                </div>
              </div>
            </div>
            
            <!-- Race Categories -->
            <div class="bg-gray-50 p-6 rounded-xl">
              <h3 class="text-xl font-bold mb-4 flex items-center">
                <FontAwesomeIcon icon={faMedal} class="mr-3 text-red-500" />
                {t('raceCategoriesDetails')}
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-white p-4 rounded-lg shadow-sm">
                  <div class="font-bold text-center mb-2">{t('marathonLabel')}</div>
                  <div class="text-center text-gray-600">42.195 km</div>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm">
                  <div class="font-bold text-center mb-2">{t('halfMarathonLabel')}</div>
                  <div class="text-center text-gray-600">21.098 km</div>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm">
                  <div class="font-bold text-center mb-2">{t('tenKRunLabel')}</div>
                  <div class="text-center text-gray-600">10 km</div>
                </div>
              </div>
            </div>
            
            <!-- Important Information -->
            <div class="bg-gradient-to-r from-gray-900 to-black text-white p-6 rounded-xl">
              <h3 class="text-xl font-bold mb-4">{t('importantInfo')}</h3>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <FontAwesomeIcon icon={faInfoCircle} class="text-red-400 mr-2 mt-1 flex-shrink-0" />
                  <span>{t('packetPickupInfo')}</span>
                </li>
                <li class="flex items-start">
                  <FontAwesomeIcon icon={faInfoCircle} class="text-red-400 mr-2 mt-1 flex-shrink-0" />
                  <span>{t('idRequired')}</span>
                </li>
                <li class="flex items-start">
                  <FontAwesomeIcon icon={faInfoCircle} class="text-red-400 mr-2 mt-1 flex-shrink-0" />
                  <span>{t('noRaceDayRegistration')}</span>
                </li>
                <li class="flex items-start">
                  <FontAwesomeIcon icon={faInfoCircle} class="text-red-400 mr-2 mt-1 flex-shrink-0" />
                  <span>{t('timingChips')}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- CTA -->
          <div class="mt-8 text-center">
            <Button href="/register" variant="primary" size="large">{t('registerNow')}</Button>
          </div>
        </div>
      {/if}
      
      <!-- Registration Tab -->
      {#if activeSection === 'register'}
        <div in:fade={{ duration: 300 }}>
          <!-- Section Header -->
          <div class="flex items-start md:items-center flex-col md:flex-row mb-6">
            <div class="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center md:mr-4 shadow-md mb-4 md:mb-0">
              <FontAwesomeIcon icon={faMedal} size="lg" />
            </div>
            <div>
              <h2 class="text-2xl font-bold">{t('inauguralEvent')}</h2>
              <p class="text-gray-500">{t('bePartOf')}</p>
            </div>
          </div>
          
          <!-- Registration Info Card -->
          <div class="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md mb-10">
            <div class="inline-block bg-black text-white px-4 py-1 rounded-md font-semibold mb-4">2026</div>
            <h3 class="text-2xl font-bold mb-4">{t('historicOpportunity')}</h3>
            <p class="text-gray-700 mb-8">{t('joinUs')}</p>
            
            <!-- Features -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div class="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 class="text-xl font-semibold mb-3">{t('premiumExperience')}</h4>
                <p class="text-gray-600">{t('experienceDescription')}</p>
              </div>
              <div class="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 class="text-xl font-semibold mb-3">{t('foundingStatus')}</h4>
                <p class="text-gray-600">{t('foundingDescription')}</p>
              </div>
            </div>
            
            <!-- CTA -->
            <div class="text-center">
              <Button href="/register" variant="primary" size="large">{t('secureSpot')}</Button>
            </div>
          </div>
          
          <!-- Promo Banner -->
          <div class="bg-gradient-to-r from-gray-900 to-black text-white p-6 rounded-xl mt-8 relative overflow-hidden">
            <div class="absolute top-0 right-0 opacity-20">
              <FontAwesomeIcon icon={faRunning} size="6x" class="transform -rotate-12 text-red-500" />
            </div>
            
            <div class="flex flex-col md:flex-row items-center justify-between relative z-10">
              <div>
                <div class="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                  {t('limitedSpots')}
                </div>
                <h3 class="text-2xl font-bold mb-2">{t('secureYourSpot')}</h3>
                                  <p class="opacity-90 mb-4 md:mb-0 max-w-lg">
                    {t('earlyBirdPromo')}
                  </p>
              </div>
              <a 
                href="/register" 
                class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:from-red-600 hover:to-red-700 transform hover:scale-105 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                <span>{t('registerNow')}</span>
                <FontAwesomeIcon icon={faArrowRight} class="ml-2" />
              </a>
            </div>
            
            <!-- Info badges -->
            <div class="mt-6 flex flex-wrap items-center justify-center gap-4">
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center">
                <FontAwesomeIcon icon={faCalendarAlt} class="text-red-400 mr-2" size="sm" />
                <span class="text-sm">{t('registrationOpens')}</span>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center">
                <FontAwesomeIcon icon={faUsers} class="text-red-400 mr-2" size="sm" />
                <span class="text-sm">{t('limitedParticipants')}</span>
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>