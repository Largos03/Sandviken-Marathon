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
	<title>{t('funkisloppet-TITLE')} - {t('funkisloppet-TITLE2')}</title>
	<meta name="description" content={t('funkisloppet-metaDescription')} />
</svelte:head>

<!-- Hero Section -->
<HeroSection title={t('funkisloppet-heroTitle')} description={t('funkisloppet-heroDescription')} />

<!-- Race Navigation -->
<div class="border-b border-gray-200 bg-white/90 backdrop-blur-sm">
	<div class="mx-auto max-w-6xl px-6 py-4">
		<div class="flex items-center justify-center gap-4">
			<a
				href="/Mini-loppet"
				class="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-red-700 transition-colors duration-200 hover:border-red-300 hover:bg-red-100 hover:text-red-800"
			>
				<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"
					></path>
				</svg>
				<span class="text-sm font-medium">Mini-loppet (3km)</span>
			</a>
			<div class="text-sm text-gray-400">•</div>
			<span class="text-sm font-semibold text-gray-700">Funkisloppet (5km)</span>
		</div>
	</div>
</div>

<!-- Stats Section -->
<Container className="py-12">
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
		<StatsCard
			icon={commonIcons.mapMarked}
			value={t('funkisloppet-distanceValue')}
			label={t('funkisloppet-distance')}
			variant="red"
		/>
		<StatsCard
			icon={commonIcons.clock}
			value={t('funkisloppet-estimatedTimeValue')}
			label={t('funkisloppet-estimatedTime')}
			variant="default"
		/>
		<StatsCard
			icon={commonIcons.calendar}
			value={t('funkisloppet-startTimeValue')}
			label={t('funkisloppet-startTime')}
			variant="black"
		/>
		<StatsCard
			icon={commonIcons.users}
			value={t('funkisloppet-ageLimitValue')}
			label={t('funkisloppet-ageLimit')}
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
			title={t('funkisloppet-familyFriendly')}
			description={t('funkisloppet-familyFriendlyDesc')}
		/>
		<IconCard icon={commonIcons.star} title={t('funkisloppet-relaxedPace')} description={t('funkisloppet-relaxedPaceDesc')} />
		<IconCard
			icon={commonIcons.mapMarked}
			title={t('funkisloppet-scenicRoute')}
			description={t('funkisloppet-scenicRouteDesc')}
		/>
		<IconCard
			icon={commonIcons.medal}
			title={t('funkisloppet-medalFinish')}
			description={t('funkisloppet-medalFinishDesc')}
		/>
	</div>
</Container>

<!-- What to Expect Section -->
<Container className="py-12">
	<SectionHeading>{t('funkisloppet-whatToExpect')}</SectionHeading>
	<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
		<NumberedStep number={1} title={t('funkisloppet-step1Title')} description={t('funkisloppet-step1Desc')} />
		<NumberedStep number={2} title={t('funkisloppet-step2Title')} description={t('funkisloppet-step2Desc')} />
		<NumberedStep number={3} title={t('funkisloppet-step3Title')} description={t('funkisloppet-step3Desc')} />
		<NumberedStep number={4} title={t('funkisloppet-step4Title')} description={t('funkisloppet-step4Desc')} />
	</div>
</Container>
