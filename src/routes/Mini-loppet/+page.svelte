<script lang="ts">
	import { tStore } from '$lib/stores/i18n';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import StatsCard from '$lib/components/StatsCard.svelte';
	import IconCard from '$lib/components/IconCard.svelte';
	import NumberedStep from '$lib/components/NumberedStep.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import Container from '$lib/components/Container.svelte';
	import { commonIcons } from '$lib/icons';

	// Translation store
	$: t = $tStore;
</script>

<svelte:head>
	<title>{t('miniloppet-TITLE')} - {t('miniloppet-TITLE2')}</title>
	<meta name="description" content={t('miniloppet-metaDescription')} />
	
	<!-- Open Graph / Social Media Meta Tags -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Mini Race (200m) - Sandviken Half-Marathon" />
	<meta property="og:description" content="A fun 200m race designed specifically for children aged 2-6 years in a supportive environment." />
	<meta property="og:url" content="https://sandvikenhalfmarathon.com/Mini-loppet" />
	
	<!-- Structured Data -->
	<script type="application/ld+json">
		{JSON.stringify({
			"@context": "https://schema.org",
			"@type": "SportsEvent",
			"name": "Mini Race (Mini-loppet)",
			"description": "A fun 200m race designed specifically for children aged 2-6 years in a supportive environment.",
			"distance": "200 m",
			"startDate": "2026-08-22T11:00:00+02:00",
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
				"name": "Sandviken Half-Marathon"
			}
		})}
	</script>
</svelte:head>

<!-- Hero Section -->
<HeroSection title={t('miniloppet-heroTitle')} description={t('miniloppet-heroDescription')} />

<!-- Stats Section -->
<Container className="py-12">
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
		<StatsCard
			icon={commonIcons.mapMarked}
			value={t('miniloppet-distanceValue')}
			label={t('miniloppet-distance')}
			variant="red"
		/>
		<StatsCard
			icon={commonIcons.clock}
			value={t('miniloppet-estimatedTimeValue')}
			label={t('miniloppet-estimatedTime')}
			variant="default"
		/>
		<StatsCard
			icon={commonIcons.calendar}
			value={t('miniloppet-startTimeValue')}
			label={t('miniloppet-startTime')}
			variant="black"
		/>
		<StatsCard
			icon={commonIcons.users}
			value={t('miniloppet-ageLimitValue')}
			label={t('miniloppet-ageLimit')}
			variant="red"
		/>
	</div>
</Container>

<!-- Features Section -->
<Container className="py-12">
	<SectionHeading>Features</SectionHeading>
	<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
		<IconCard
			icon={commonIcons.users}
			title={t('miniloppet-childFriendly')}
			description={t('miniloppet-childFriendlyDesc')}
		/>
		<IconCard
			icon={commonIcons.star}
			title={t('miniloppet-supportiveEnvironment')}
			description={t('miniloppet-supportiveEnvironmentDesc')}
		/>
		<IconCard
			icon={commonIcons.mapMarked}
			title={t('miniloppet-manageableDistance')}
			description={t('miniloppet-manageableDistanceDesc')}
		/>
		<IconCard
			icon={commonIcons.medal}
			title={t('miniloppet-celebrationFocus')}
			description={t('miniloppet-celebrationFocusDesc')}
		/>
	</div>
</Container>

<!-- What to Expect Section -->
<Container className="py-12">
	<SectionHeading>{t('miniloppet-whatToExpect')}</SectionHeading>
	<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
		<NumberedStep number={1} title={t('miniloppet-step1Title')} description={t('miniloppet-step1Desc')} />
		<NumberedStep number={2} title={t('miniloppet-step2Title')} description={t('miniloppet-step2Desc')} />
		<NumberedStep number={3} title={t('miniloppet-step3Title')} description={t('miniloppet-step3Desc')} />
		<NumberedStep number={4} title={t('miniloppet-step4Title')} description={t('miniloppet-step4Desc')} />
	</div>
</Container>
