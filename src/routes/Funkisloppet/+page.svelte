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
	<title>{t('TITLE')} - {t('TITLE2')}</title>
	<meta name="description" content={t('metaDescription')} />
</svelte:head>

<!-- Hero Section -->
<HeroSection title={t('heroTitle')} description={t('heroDescription')} />

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
			value={t('distanceValue')}
			label={t('distance')}
			variant="red"
		/>
		<StatsCard
			icon={commonIcons.clock}
			value={t('estimatedTimeValue')}
			label={t('estimatedTime')}
			variant="default"
		/>
		<StatsCard
			icon={commonIcons.calendar}
			value={t('startTimeValue')}
			label={t('startTime')}
			variant="black"
		/>
		<StatsCard
			icon={commonIcons.users}
			value={t('ageLimitValue')}
			label={t('ageLimit')}
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
			title={t('familyFriendly')}
			description={t('familyFriendlyDesc')}
		/>
		<IconCard icon={commonIcons.star} title={t('relaxedPace')} description={t('relaxedPaceDesc')} />
		<IconCard
			icon={commonIcons.mapMarked}
			title={t('scenicRoute')}
			description={t('scenicRouteDesc')}
		/>
		<IconCard
			icon={commonIcons.medal}
			title={t('medalFinish')}
			description={t('medalFinishDesc')}
		/>
	</div>
</Container>

<!-- What to Expect Section -->
<Container className="py-12">
	<SectionHeading>{t('whatToExpect')}</SectionHeading>
	<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
		<NumberedStep number={1} title={t('step1Title')} description={t('step1Desc')} />
		<NumberedStep number={2} title={t('step2Title')} description={t('step2Desc')} />
		<NumberedStep number={3} title={t('step3Title')} description={t('step3Desc')} />
		<NumberedStep number={4} title={t('step4Title')} description={t('step4Desc')} />
	</div>
</Container>
