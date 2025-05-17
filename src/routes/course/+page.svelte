<script lang="ts">
    import { language, tStore } from '$lib/stores/i18n.js';
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
        faInfoCircle,
        faRoad,
        faRoute,
        faRunning,
        faMapPin,
        faChevronRight
    } from '@fortawesome/free-solid-svg-icons';
    
    // UI Components
    import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '$lib/components/ui/card';
    
    // Use the derived translation store
    $: t = $tStore;
    
    // Accept data from server
    export let data: { lang?: string } = {};
</script>

<svelte:head>
    <title>{t('coursePageTitle')} | Sandviken Marathon</title>
    <meta name="description" content={t('courseDescription')} />
</svelte:head>

<div class="min-h-screen bg-gray-50" in:fade>
    <!-- Hero Section with Background -->
    <div class="bg-black text-white py-10 md:py-16 relative overflow-hidden">
        <!-- Decorative diagonal lines -->
        <div class="absolute inset-0 opacity-10">
            <div class="absolute -inset-10 transform rotate-45">
                <div class="h-20 bg-red-500/30 mb-16 shadow-lg"></div>
                <div class="h-10 bg-red-500/20 mb-16 shadow-lg"></div>
                <div class="h-5 bg-red-500/10 shadow-lg"></div>
            </div>
        </div>
        
        <div class="container mx-auto px-4 py-8 md:py-12 relative z-10">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('coursePageTitle')}</h1>
            <div class="w-32 h-1 bg-red-500/70 mb-8 transform -skew-x-12"></div>
            <p class="text-xl md:text-2xl max-w-3xl leading-relaxed font-light">{t('coursePageIntro')}</p>
        </div>
    </div>
    
    <main class="relative -mt-8 z-10">
        <div class="container mx-auto px-4 py-8 md:py-16 mb-16">
            <!-- Stats Cards Row -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg group">
                    <div class="bg-red-500/70 h-1.5 w-full"></div>
                    <div class="p-6">
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center flex-shrink-0 transform transition-transform group-hover:-rotate-6 border-b-2 border-red-500/70">
                                <FontAwesomeIcon icon={faRoute} class="text-red-100" />
                            </div>
                            <div>
                                <p class="text-sm text-gray-500 font-medium uppercase tracking-wide">{t('courseLength')}</p>
                                <h3 class="text-xl font-bold text-gray-900">42.195 km</h3>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg group">
                    <div class="bg-red-500/70 h-1.5 w-full"></div>
                    <div class="p-6">
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center flex-shrink-0 transform transition-transform group-hover:-rotate-6 border-b-2 border-red-500/70">
                                <FontAwesomeIcon icon={faMountain} class="text-red-100" />
                            </div>
                            <div>
                                <p class="text-sm text-gray-500 font-medium uppercase tracking-wide">{t('elevationGain')}</p>
                                <h3 class="text-xl font-bold text-gray-900">350m</h3>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg group">
                    <div class="bg-red-500/70 h-1.5 w-full"></div>
                    <div class="p-6">
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center flex-shrink-0 transform transition-transform group-hover:-rotate-6 border-b-2 border-red-500/70">
                                <FontAwesomeIcon icon={faTint} class="text-red-100" />
                            </div>
                            <div>
                                <p class="text-sm text-gray-500 font-medium uppercase tracking-wide">{t('aidStations')}</p>
                                <h3 class="text-xl font-bold text-gray-900">6</h3>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg group">
                    <div class="bg-red-500/70 h-1.5 w-full"></div>
                    <div class="p-6">
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center flex-shrink-0 transform transition-transform group-hover:-rotate-6 border-b-2 border-red-500/70">
                                <FontAwesomeIcon icon={faFlagCheckered} class="text-red-100" />
                            </div>
                            <div>
                                <p class="text-sm text-gray-500 font-medium uppercase tracking-wide">{t('startFinish')}</p>
                                <h3 class="text-xl font-bold text-gray-900">Sandviken</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Map and Course Details -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <!-- Map Card -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="relative">
                        <div class="absolute inset-0 bg-black/60 z-10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <p class="text-white text-center px-6">
                                {t('courseMapInteractive')}
                            </p>
                        </div>
                        <img 
                            src="/sandviken-map.jpg" 
                            alt={t('courseMapAlt')} 
                            class="w-full aspect-[4/3] object-cover"
                        />
                    </div>
                    <div class="p-5">
                        <h2 class="text-xl font-bold mb-2 flex items-center gap-2 text-gray-900">
                            <FontAwesomeIcon icon={faMapMarkedAlt} class="text-red-500/70" />
                            {t('courseMap')}
                        </h2>
                        <p class="text-sm text-gray-600 mb-3">{t('courseMapNote')}</p>
                        
                        <div class="flex items-center gap-2 text-black py-3 border-t border-gray-100">
                            <FontAwesomeIcon icon={faMountain} class="text-red-500/70" />
                            <span class="text-sm font-medium">{t('elevationProfile')}: 350m</span>
                        </div>
                    </div>
                </div>
                
                <!-- Course Details -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden md:col-span-2">
                    <div class="px-6 pt-6 pb-3">
                        <h2 class="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                            <FontAwesomeIcon icon={faRoute} class="text-red-500/70" />
                            {t('courseDetailsTitle')}
                        </h2>
                        <p class="text-gray-700 mb-6 leading-relaxed">{t('courseDescription')}</p>
                        
                        <h3 class="font-semibold mb-3 text-gray-900 inline-flex items-center">
                            {t('courseHighlights')}
                            <span class="w-8 h-px bg-red-500/30 mx-2"></span>
                        </h3>
                        
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                            <div class="bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors border-l-3 border-red-400/30">
                                <div class="p-3 flex items-center">
                                    <div class="w-8 h-8 bg-gray-800 text-white rounded-md flex items-center justify-center flex-shrink-0">
                                        <FontAwesomeIcon icon={faWater} class="text-red-100" />
                                    </div>
                                    <span class="text-gray-900 font-medium ml-3">{t('scenicWaterfront')}</span>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors border-l-3 border-red-400/30">
                                <div class="p-3 flex items-center">
                                    <div class="w-8 h-8 bg-gray-800 text-white rounded-md flex items-center justify-center flex-shrink-0">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} class="text-red-100" />
                                    </div>
                                    <span class="text-gray-900 font-medium ml-3">{t('historicNeighborhoods')}</span>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors border-l-3 border-red-400/30">
                                <div class="p-3 flex items-center">
                                    <div class="w-8 h-8 bg-gray-800 text-white rounded-md flex items-center justify-center flex-shrink-0">
                                        <FontAwesomeIcon icon={faTree} class="text-red-100" />
                                    </div>
                                    <span class="text-gray-900 font-medium ml-3">{t('forestViews')}</span>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors border-l-3 border-red-400/30">
                                <div class="p-3 flex items-center">
                                    <div class="w-8 h-8 bg-gray-800 text-white rounded-md flex items-center justify-center flex-shrink-0">
                                        <FontAwesomeIcon icon={faRoad} class="text-red-100" />
                                    </div>
                                    <span class="text-gray-900 font-medium ml-3">{t('scenicRoads')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Aid Stations -->
                    <div class="bg-gray-50 px-6 py-5 border-t border-gray-100">
                        <h3 class="font-semibold mb-4 text-gray-900 flex items-center gap-2">
                            <FontAwesomeIcon icon={faTint} class="text-red-500/70" />
                            {t('aidStations')}
                        </h3>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10">
                            <div>
                                <h4 class="font-medium text-gray-900 mb-2">{t('waterStations')}</h4>
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1.5 bg-white border border-gray-200 text-gray-800 rounded-full text-xs font-medium shadow-sm">5km</span>
                                    <span class="px-3 py-1.5 bg-white border border-gray-200 text-gray-800 rounded-full text-xs font-medium shadow-sm">12km</span>
                                    <span class="px-3 py-1.5 bg-white border border-gray-200 text-gray-800 rounded-full text-xs font-medium shadow-sm">21km</span>
                                    <span class="px-3 py-1.5 bg-white border border-gray-200 text-gray-800 rounded-full text-xs font-medium shadow-sm">30km</span>
                                    <span class="px-3 py-1.5 bg-white border border-gray-200 text-gray-800 rounded-full text-xs font-medium shadow-sm">37km</span>
                                </div>
                                <p class="text-sm text-gray-600 mt-2">{t('waterStationDetails')}</p>
                            </div>
                            
                            <div>
                                <h4 class="font-medium text-gray-900 mb-2">{t('medicalStations')}</h4>
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1.5 bg-white border border-gray-200 text-gray-800 rounded-full text-xs font-medium shadow-sm">12km</span>
                                    <span class="px-3 py-1.5 bg-white border border-gray-200 text-gray-800 rounded-full text-xs font-medium shadow-sm">21km</span>
                                    <span class="px-3 py-1.5 bg-white border border-gray-200 text-gray-800 rounded-full text-xs font-medium shadow-sm">37km</span>
                                </div>
                                <p class="text-sm text-gray-600 mt-2">{t('medicalStationDetails')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Race Day Information -->
            <div class="bg-white rounded-xl shadow-md overflow-hidden">
                <div class="md:flex">
                    <div class="md:w-1/3 bg-gray-900 text-white p-6 border-l-4 border-red-500 relative">
                        <div class="absolute inset-0 opacity-10 bg-red-500/20"></div>
                        <div class="relative z-10">
                            <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
                                <FontAwesomeIcon icon={faRunning} class="text-red-200" />
                                {t('raceDayInfo')}
                            </h2>
                            <p class="text-gray-300 mb-6">{t('raceDayDetails')}</p>
                            
                            <a href="/register" class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors font-medium border-b-2 border-red-500">
                                <FontAwesomeIcon icon={faRunning} class="text-red-500" />
                                {t('registerNow')}
                            </a>
                        </div>
                    </div>
                    
                    <div class="md:w-2/3 p-6">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="bg-gray-50 rounded-lg p-4 flex items-start gap-4 hover:bg-gray-100 transition-colors border-l-3 border-red-400/30">
                                <div class="w-10 h-10 bg-gray-800 text-white rounded-md flex items-center justify-center flex-shrink-0">
                                    <FontAwesomeIcon icon={faClock} class="text-red-100" />
                                </div>
                                <div>
                                    <h3 class="font-medium mb-1 text-gray-900">{t('startTime')}</h3>
                                    <p class="text-gray-600">{t('startTimeDetails')}</p>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 rounded-lg p-4 flex items-start gap-4 hover:bg-gray-100 transition-colors border-l-3 border-red-400/30">
                                <div class="w-10 h-10 bg-gray-800 text-white rounded-md flex items-center justify-center flex-shrink-0">
                                    <FontAwesomeIcon icon={faMapPin} class="text-red-100" />
                                </div>
                                <div>
                                    <h3 class="font-medium mb-1 text-gray-900">{t('startLocation')}</h3>
                                    <p class="text-gray-600">{t('startLocationDetails')}</p>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 rounded-lg p-4 flex items-start gap-4 hover:bg-gray-100 transition-colors border-l-3 border-red-400/30">
                                <div class="w-10 h-10 bg-gray-800 text-white rounded-md flex items-center justify-center flex-shrink-0">
                                    <FontAwesomeIcon icon={faTint} class="text-red-100" />
                                </div>
                                <div>
                                    <h3 class="font-medium mb-1 text-gray-900">{t('supportAvailable')}</h3>
                                    <p class="text-gray-600">{t('supportDetails')}</p>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 rounded-lg p-4 flex items-start gap-4 hover:bg-gray-100 transition-colors border-l-3 border-red-400/30">
                                <div class="w-10 h-10 bg-gray-800 text-white rounded-md flex items-center justify-center flex-shrink-0">
                                    <FontAwesomeIcon icon={faInfoCircle} class="text-red-100" />
                                </div>
                                <div>
                                    <h3 class="font-medium mb-1 text-gray-900">{t('moreInfo')}</h3>
                                    <p class="text-gray-600">{t('contactOrganizers')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Spacer element to add bottom margin -->
            <div class="h-16"></div>
        </div>
    </main>
</div> 