<!-- Homepage component for the Sandviken Half-marathon website -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faCalendarAlt, faStar } from '@fortawesome/free-solid-svg-icons';
	import { tStore } from '$lib/stores/i18n';
	import { EVENT_CONFIG } from '$lib/config';
	import Container from '$lib/components/Container.svelte';
	import CountdownTimer from '$lib/components/CountdownTimer.svelte';
	import QuickOverview from '$lib/components/QuickOverview.svelte';
	import RegistrationCTA from '$lib/components/RegistrationCTA.svelte';

	// State for animation visibility
	let visible = false;

	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 100);
	});

	// Translation store
	$: t = $tStore;
</script>

<svelte:head>
	<title>{t('home-officialEvent')}</title>
	<meta name="description" content={t('home-metaDescription')} />
	
	<!-- Open Graph / Social Media Meta Tags -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Sandviken Half-Marathon 2026" />
	<meta property="og:description" content={t('home-metaDescription')} />
	<meta property="og:url" content="https://sandvikenhalfmarathon.com" />
	
	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Sandviken Half-Marathon 2026" />
	<meta name="twitter:description" content={t('home-metaDescription')} />
	
	<!-- Structured Data for Google -->
	<script type="application/ld+json">
		{JSON.stringify({
			"@context": "https://schema.org",
			"@type": "SportsEvent",
			"name": "Sandviken Half-Marathon",
			"description": "Join us for an unforgettable running experience through the scenic landscapes of Sandviken, showcasing the perfect blend of natural beauty and industrial heritage.",
			"startDate": "2026-08-22T11:00:00+02:00",
			"endDate": "2026-08-22T16:00:00+02:00",
			"eventStatus": "https://schema.org/EventScheduled",
			"eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
			"location": {
				"@type": "Place",
				"name": "Stadsparken Sandviken",
				"address": {
					"@type": "PostalAddress",
					"addressLocality": "Sandviken",
					"addressCountry": "SE"
				}
			},
			"organizer": {
				"@type": "Organization",
				"name": "Sandviken Half-Marathon",
				"email": "traningsgruppensandviken@outlook.com"
			},
			"offers": {
				"@type": "Offer",
				"url": "https://sandvikenhalfmarathon.com/register",
				"availability": "https://schema.org/PreOrder"
			},
			"subEvent": [
				{
					"@type": "SportsEvent",
					"name": "Half Marathon",
					"description": "21.1km half marathon through Sandviken",
					"distance": "21.1 km"
				},
				{
					"@type": "SportsEvent",
					"name": "Para Run (Funkisloppet)",
					"description": "1km inclusive run for all abilities",
					"distance": "1 km"
				},
				{
					"@type": "SportsEvent",
					"name": "Mini Race",
					"description": "200m fun race for children aged 2-6 years",
					"distance": "200 m"
				}
			]
		})}
	</script>
</svelte:head>

<!-- Hero Section - Primary visual impact area to capture visitor attention -->
<!-- Intent: Create immediate excitement and establish the event's premium nature -->
<!-- Why responsive height: Prevents excessive height on mobile landscape while maintaining full-screen on desktop -->
<div
	class="relative h-screen min-h-[60vh] overflow-hidden bg-black text-white md:h-screen md:min-h-screen"
	in:fade={{ duration: 300 }}
>
	<!-- Multi-layer gradient overlays ensure text readability across varying video content -->
	<!-- Why multiple layers: Provides depth and ensures contrast regardless of video brightness -->
	<div class="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/70 to-black/85"></div>
	<!-- Background video showcasing running to immerse visitors in the event atmosphere -->
	<!-- Why autoplay muted: Complies with browser policies while maintaining visual engagement -->
	<!-- playsinline prevents fullscreen on mobile devices -->
	<video
		autoplay
		muted
		loop
		playsinline
		preload="metadata"
		poster="/Logo.webp"
		class="absolute inset-0 z-0 h-full w-full object-cover"
	>
		<source src="/running.webm" type="video/mp4" />
		Your browser does not support the video tag.
	</video>

	<div class="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
		{#if visible}
			<!-- Event badge - Highlights the official nature of the inaugural event -->
			<!-- Why stars: Creates visual hierarchy and emphasizes exclusivity -->
			<div class="mb-8">
				<div
					class="flex items-center rounded-full bg-white px-6 py-2 text-sm font-bold tracking-wider text-black uppercase shadow-lg"
				>
					<FontAwesomeIcon icon={faStar} class="mr-1 text-red-600" size="xs" />
					<span>{t('home-officialEvent')}</span>
					<FontAwesomeIcon icon={faStar} class="ml-1 text-red-600" size="xs" />
				</div>
			</div>

			<!-- Main title with decorative elements - Emphasizes event name and year -->
			<!-- Why split layout: Allows responsive typography and decorative accents -->
			<h1 class="mb-4 text-4xl leading-tight font-black tracking-tight uppercase md:text-7xl">
				<div class="flex flex-col items-center">
					<span class="relative mb-2 inline-block tracking-wide text-white">
						{t('home-TITLE')}
						<!-- Underline accent for visual emphasis and brand consistency -->
						<div class="underline-accent absolute -right-2 bottom-1.5 -left-2 h-0.5"></div>
					</span>
					<span class="text-gradient-white relative items-center tracking-wide">
						{t('home-TITLE2')}
					</span>
				</div>
			</h1>

			<!-- Event date display - Clearly communicates when the event occurs -->
			<!-- Why backdrop blur: Modern aesthetic that maintains readability over video -->
			<div class="mb-8">
				<div
					class="backdrop-glass flex items-center rounded-xl border border-white/30 px-6 py-3 font-bold text-white shadow-lg"
				>
					<FontAwesomeIcon icon={faCalendarAlt} class="mr-3 text-red-400" />
					<span>{t('home-eventDate')}</span>
				</div>
			</div>

			<!-- Introductory text - Provides context and builds anticipation -->
			<!-- Why max-width: Prevents text from becoming too wide on large screens -->
			<p class="mb-10 max-w-2xl text-xl leading-relaxed font-light text-white/95 md:text-2xl">
				{t('home-introText')}
			</p>

			<!-- Countdown timer - Builds urgency and excitement for the event -->
			<!-- Why specific date: Official race start time; now configurable for future events -->
			<CountdownTimer targetDate={EVENT_CONFIG.raceDate} label={t('home-raceStartingIn')} />
		{/if}
	</div>
</div>

<!-- Main Content Section - Detailed event information and conversion elements -->
<!-- Intent: Provide comprehensive event details while maintaining visual hierarchy -->
<!-- Why gray background: Provides visual separation from dark hero, improving content readability -->
<section class="bg-gray-50 py-16 md:py-24">
	<Container>
		<!-- Quick Overview Section - Key event highlights and statistics -->
		<!-- Why first: Immediately addresses visitor questions about event scope and credibility -->
		<div class="mb-16">
			<div class="mb-10 text-center">
				<!-- Inaugural event badge - Emphasizes historical significance -->
				<!-- Why gradient: Creates premium feel consistent with brand colors -->
				<div class="bg-gradient-dark mb-4 inline-block rounded-lg px-4 py-2.5 text-white shadow-lg">
					<span class="text-lg font-bold">{t('home-inauguralEventTitle')}</span>
				</div>
				<h2 class="mb-6 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl">
					{t('home-bePartOfHistoryText')}
				</h2>
			</div>
			<!-- QuickOverview component displays key metrics to build trust and excitement -->
			<QuickOverview />
		</div>

		<!-- Registration Call-to-Action - Primary conversion element -->
		<!-- Intent: Drive registrations by providing clear next steps after information consumption -->
		<RegistrationCTA />
	</Container>
</section>
