<script lang="ts">
  import { t } from '$lib/stores/i18n';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { 
    faTrophy, 
    faUsers, 
    faMapMarkerAlt, 
    faCalendarAlt,
    faHeart,
    faMedal,
    faHistory,
    faLightbulb,
    faChevronRight,
    faInfoCircle,
    faRunning
  } from '@fortawesome/free-solid-svg-icons';
  
  // Initialize visibility
  let visible = false;
  
  // Active tab state
  let activeTab = 'mission';

  // Tabs structure
  const tabs = [
    { id: 'mission', label: t('aboutMission'), icon: faHeart },
    { id: 'history', label: t('aboutHistoryTitle'), icon: faHistory },
    { id: 'values', label: t('aboutValuesTitle'), icon: faLightbulb },
    { id: 'details', label: t('eventDetailsTitle'), icon: faInfoCircle },
    { id: 'community', label: t('aboutCommunityTitle'), icon: faUsers },
    { id: 'future', label: t('aboutFutureTitle'), icon: faTrophy }
  ];
  
  function setActiveTab(tabId: string): void {
    activeTab = tabId;
    // Update URL hash without scrolling
    history.replaceState(null, '', `#${tabId}`);
  }
  
  onMount(() => {
    visible = true;
    
    // Check for hash in URL to set active tab
    const hash = window.location.hash.substring(1);
    if (hash && tabs.some(tab => tab.id === hash)) {
      activeTab = hash;
    }
  });
</script>

<svelte:head>
  <title>{t('aboutTitle')} | Sandviken Marathon</title>
  <meta name="description" content={t('aboutIntro')} />
  <link rel="canonical" href="https://sandvikenmarathon.com/about" />
</svelte:head>

<div in:fade={{ duration: 300 }}>
  <!-- Hero Section -->
  <div class="relative bg-black text-white py-12 md:py-16" role="banner">
    <!-- Subtle grid pattern overlay -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-white/5"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
    </div>
    
    <!-- Content -->
    <div class="container mx-auto text-center px-4 relative z-10">
      <h1 class="text-3xl md:text-5xl font-bold mb-3 inline-block relative" in:fly={{ y: -20, duration: 800, delay: 300 }}>
        {t('aboutTitle')}
        <span class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-red-500/70 rounded-full shadow-md"></span>
      </h1>
      <p class="text-base md:text-lg max-w-2xl mx-auto opacity-90 font-light mb-8" in:fly={{ y: 20, duration: 800, delay: 400 }}>
        {t('aboutIntro')}
      </p>
      
      <!-- Tabs Navigation -->
      <div class="flex justify-center flex-wrap gap-1 md:gap-2 bg-black/30 backdrop-blur-sm rounded-full mx-auto max-w-3xl p-1 mb-4 mt-8" in:fly={{ y: 20, duration: 800, delay: 500 }}>
        {#each tabs as tab}
          <button 
            class="px-3 py-2 md:px-5 md:py-2.5 text-sm md:text-base flex items-center space-x-1.5 md:space-x-2.5 
            transition-all duration-200 rounded-full hover:-translate-y-0.5
            {activeTab === tab.id ? 'bg-white text-gray-900 font-semibold shadow-sm' : 'text-white/90 hover:bg-white/10'}"
            on:click={() => setActiveTab(tab.id)}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            <FontAwesomeIcon icon={tab.icon} class="w-3.5 h-3.5 md:w-4 md:h-4 {activeTab === tab.id ? 'text-red-500' : ''}" />
            <span>{tab.label}</span>
          </button>
        {/each}
      </div>
    </div>
  </div>

  <!-- Main Content Area -->
  <div class="container mx-auto -mt-6 px-4 relative z-20 mb-20">
    <div class="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
      <div class="min-h-[60vh] p-6 md:p-8 bg-gradient-to-b from-white to-gray-50" transition:fade={{ duration: 300 }}>
        <!-- Tab Content -->
        {#if activeTab === 'mission'}
          <!-- Tab Header -->
          <div class="flex items-start md:items-center flex-col md:flex-row mb-6">
            <div class="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center md:mr-4 shadow-md mb-4 md:mb-0 border-b-4 border-red-500">
              <FontAwesomeIcon icon={faHeart} size="lg" class="text-red-100" />
            </div>
            <div>
              <h2 class="text-2xl font-bold">{t('aboutMission')}</h2>
              <p class="text-gray-500">Our core purpose and values</p>
            </div>
          </div>
          
          <div class="grid md:grid-cols-5 gap-6">
            <div class="md:col-span-3">
              <p class="text-gray-700 mb-4">
                Welcome to the Sandviken Marathon, a premier running event that brings together athletes, enthusiasts, and the community in a celebration of endurance, determination, and achievement. Our mission is to promote health, fitness, and community spirit through the power of running.
              </p>
              
              <!-- Highlight Box -->
              <div class="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-5 rounded-lg relative overflow-hidden shadow-md mt-2 border-l-4 border-red-500">
                <div class="absolute inset-0 opacity-10 bg-red-500 bg-opacity-20"></div>
                <div class="relative z-10">
                  <p class="font-medium">Join us as we build a community of runners who inspire and challenge each other to reach new heights.</p>
                </div>
              </div>
            </div>
            
            <div class="md:col-span-2">
              <div class="rounded-lg shadow-md w-full h-48 md:h-full bg-gray-100 flex items-center justify-center">
                <FontAwesomeIcon icon={faRunning} class="text-gray-400 text-4xl md:text-6xl opacity-70" />
              </div>
            </div>
          </div>
        {/if}
        
        {#if activeTab === 'history'}
          <!-- Tab Header -->
          <div class="flex items-start md:items-center flex-col md:flex-row mb-6">
            <div class="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center md:mr-4 shadow-md mb-4 md:mb-0 border-b-4 border-red-500">
              <FontAwesomeIcon icon={faHistory} size="lg" class="text-red-100" />
            </div>
            <div>
              <h2 class="text-2xl font-bold">{t('aboutHistoryTitle')}</h2>
              <p class="text-gray-500">Our journey from the beginning</p>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <p class="mb-4 text-gray-700">{t('aboutHistoryDesc')}</p>
              <p class="text-gray-700">
                Since our inception, the Sandviken Marathon has grown from a small local event to a nationally recognized race. We've welcomed thousands of runners, created countless memories, and supported numerous charitable causes.
              </p>
            </div>
            
            <div class="flex flex-col space-y-4">
              <!-- Timeline Item -->
              <div class="flex items-start">
                <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 ring-2 ring-red-400/30">
                  1
                </div>
                <div>
                  <h3 class="font-semibold mb-1">First Event</h3>
                  <p class="text-gray-600">Our inaugural marathon brought together 500 runners from across the region.</p>
                </div>
              </div>
              
              <!-- Timeline Item -->
              <div class="flex items-start">
                <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 ring-2 ring-red-400/30">
                  2
                </div>
                <div>
                  <h3 class="font-semibold mb-1">Growing Community</h3>
                  <p class="text-gray-600">We expanded our race categories and welcomed more participants each year.</p>
                </div>
              </div>
              
              <!-- Timeline Item -->
              <div class="flex items-start">
                <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 ring-2 ring-red-400/30">
                  3
                </div>
                <div>
                  <h3 class="font-semibold mb-1">National Recognition</h3>
                  <p class="text-gray-600">Sandviken Marathon is now a key event in the Swedish running calendar.</p>
                </div>
              </div>
            </div>
          </div>
        {/if}
        
        {#if activeTab === 'values'}
          <!-- Tab Header -->
          <div class="flex items-start md:items-center flex-col md:flex-row mb-6">
            <div class="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center md:mr-4 shadow-md mb-4 md:mb-0 border-b-4 border-red-500">
              <FontAwesomeIcon icon={faLightbulb} size="lg" class="text-red-100" />
            </div>
            <div>
              <h2 class="text-2xl font-bold">{t('aboutValuesTitle')}</h2>
              <p class="text-gray-500">What makes our marathon special</p>
            </div>
          </div>
          
          <div class="grid md:grid-cols-3 gap-6">
            <!-- Value Card -->
            <div class="bg-gray-50 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-b-4 border-red-500/40 hover:border-red-500">
              <div class="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3 class="text-xl font-semibold mb-2">Community</h3>
              <p class="text-gray-600">Building connections and fostering a supportive environment for all participants.</p>
            </div>
            
            <!-- Value Card -->
            <div class="bg-gray-50 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-b-4 border-red-500/40 hover:border-red-500">
              <div class="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faMedal} />
              </div>
              <h3 class="text-xl font-semibold mb-2">Excellence</h3>
              <p class="text-gray-600">Striving for the highest standards in event organization and participant experience.</p>
            </div>
            
            <!-- Value Card -->
            <div class="bg-gray-50 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-b-4 border-red-500/40 hover:border-red-500">
              <div class="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <h3 class="text-xl font-semibold mb-2">Inclusivity</h3>
              <p class="text-gray-600">Welcoming runners of all abilities and backgrounds to join our community.</p>
            </div>
          </div>
        {/if}
        
        {#if activeTab === 'details'}
          <!-- Tab Header -->
          <div class="flex items-start md:items-center flex-col md:flex-row mb-6">
            <div class="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center md:mr-4 shadow-md mb-4 md:mb-0 border-b-4 border-red-500">
              <FontAwesomeIcon icon={faInfoCircle} size="lg" class="text-red-100" />
            </div>
            <div>
              <h2 class="text-2xl font-bold">{t('eventDetailsTitle')}</h2>
              <p class="text-gray-500">Everything you need to know about our event</p>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Detail Card -->
            <div class="p-5 bg-gray-50 rounded-xl border-l-3 border-red-400/30">
              <div class="flex items-center mb-3">
                <div class="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center mr-3">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </div>
                <h3 class="font-semibold">Date & Time</h3>
              </div>
              <p class="text-gray-600">Join us on the first Saturday of June for a day of running, celebration, and community spirit.</p>
              <div class="mt-4 flex items-center text-sm text-gray-500">
                <span class="font-semibold mr-2 text-red-900">Start time:</span> 8:00 AM
              </div>
              <div class="mt-1 flex items-center text-sm text-gray-500">
                <span class="font-semibold mr-2 text-red-900">Registration opens:</span> 6:30 AM
              </div>
            </div>
            
            <!-- Detail Card -->
            <div class="p-5 bg-gray-50 rounded-xl border-l-3 border-red-400/30">
              <div class="flex items-center mb-3">
                <div class="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center mr-3">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <h3 class="font-semibold">Location</h3>
              </div>
              <p class="text-gray-600">The race takes place in the beautiful city of Sandviken, featuring scenic routes through parks and along the waterfront.</p>
              <div class="mt-4 flex items-center text-sm text-gray-500">
                <span class="font-semibold mr-2 text-red-900">Start/Finish:</span> Sandviken City Park
              </div>
              <div class="mt-1 flex items-center text-sm text-gray-500">
                <span class="font-semibold mr-2 text-red-900">Parking:</span> Available at City Center
              </div>
            </div>
          </div>
          
          <div class="mt-6">
            <!-- Highlight Box -->
            <div class="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-5 rounded-lg relative overflow-hidden shadow-md mt-2 border-l-4 border-red-500">
              <div class="absolute inset-0 opacity-10 bg-red-500 bg-opacity-20"></div>
              <div class="relative z-10">
                <p>{t('eventDetailsDesc')}</p>
              </div>
            </div>
          </div>
        {/if}
        
        {#if activeTab === 'community'}
          <!-- Tab Header -->
          <div class="flex items-start md:items-center flex-col md:flex-row mb-6">
            <div class="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center md:mr-4 shadow-md mb-4 md:mb-0 border-b-4 border-red-500">
              <FontAwesomeIcon icon={faUsers} size="lg" class="text-red-100" />
            </div>
            <div>
              <h2 class="text-2xl font-bold">{t('aboutCommunityTitle')}</h2>
              <p class="text-gray-500">More than just a race</p>
            </div>
          </div>
          
          <div class="grid md:grid-cols-5 gap-6">
            <div class="md:col-span-3">
              <p class="mb-4 text-gray-700">{t('aboutCommunityDesc')}</p>
              <p class="text-gray-700">
                The Sandviken Marathon is more than just a race—it's a celebration of our community. We bring together runners, volunteers, spectators, and local businesses to create an unforgettable experience.
              </p>
              
              <div class="mt-6 space-y-3">
                <!-- Bullet Point -->
                <div class="flex items-start">
                  <FontAwesomeIcon icon={faChevronRight} class="text-red-500/70 mt-1 mr-3 flex-shrink-0" />
                  <p class="text-gray-600">Community engagement throughout the year</p>
                </div>
                
                <!-- Bullet Point -->
                <div class="flex items-start">
                  <FontAwesomeIcon icon={faChevronRight} class="text-red-500/70 mt-1 mr-3 flex-shrink-0" />
                  <p class="text-gray-600">Support for local businesses and organizations</p>
                </div>
                
                <!-- Bullet Point -->
                <div class="flex items-start">
                  <FontAwesomeIcon icon={faChevronRight} class="text-red-500/70 mt-1 mr-3 flex-shrink-0" />
                  <p class="text-gray-600">Volunteer opportunities for all ages</p>
                </div>
              </div>
            </div>
            
            <div class="md:col-span-2">
              <div class="rounded-lg shadow-md w-full h-48 md:h-full bg-gray-100 flex items-center justify-center">
                <FontAwesomeIcon icon={faUsers} class="text-gray-400 text-4xl md:text-6xl opacity-70" />
              </div>
            </div>
          </div>
        {/if}
        
        {#if activeTab === 'future'}
          <!-- Tab Header -->
          <div class="flex items-start md:items-center flex-col md:flex-row mb-6">
            <div class="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center md:mr-4 shadow-md mb-4 md:mb-0 border-b-4 border-red-500">
              <FontAwesomeIcon icon={faTrophy} size="lg" class="text-red-100" />
            </div>
            <div>
              <h2 class="text-2xl font-bold">{t('aboutFutureTitle')}</h2>
              <p class="text-gray-500">Building our tomorrow</p>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <p class="mb-4 text-gray-700">{t('aboutFutureDesc')}</p>
              <p class="text-gray-700">
                As we look to the future, our vision is to continue growing the Sandviken Marathon while maintaining its community spirit and commitment to excellence. We aim to introduce new race categories, enhance the participant experience, and expand our charitable impact.
              </p>
            </div>
            
            <div class="bg-gray-900 text-white p-6 rounded-lg relative overflow-hidden shadow-md h-full flex flex-col justify-center border-l-4 border-red-500">
              <div class="absolute inset-0 opacity-10 bg-red-500 bg-opacity-20"></div>
              <div class="flex items-center relative z-10">
                <div class="mr-4">
                  <FontAwesomeIcon icon={faTrophy} size="2x" class="text-red-300/80" />
                </div>
                <div>
                  <h3 class="font-semibold text-xl mb-2">Join Our Legacy</h3>
                  <p class="font-medium">Be part of our growing story. Register for our next event today!</p>
                  <a href="/register" class="inline-block mt-4 bg-white text-gray-900 px-6 py-2.5 rounded-md font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-b-2 border-red-500">
                    <span class="flex items-center">Register Now <FontAwesomeIcon icon={faChevronRight} class="ml-2 h-3 w-3 text-red-500" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
