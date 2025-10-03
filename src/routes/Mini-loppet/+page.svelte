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
</svelte:head>

<!-- Hero Section -->
<HeroSection title={t('miniloppet-heroTitle')} description={t('miniloppet-heroDescription')} />

<!-- Race Navigation -->
<div class="border-b border-gray-200 bg-white/90 backdrop-blur-sm">
	<div class="mx-auto max-w-6xl px-6 py-4">
		<div class="flex items-center justify-center gap-4">
			<span class="text-sm font-semibold text-gray-700">Mini-loppet (3km)</span>
			<div class="text-sm text-gray-400">•</div>
			<a
				href="/Funkisloppet"
				class="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-red-700 transition-colors duration-200 hover:border-red-300 hover:bg-red-100 hover:text-red-800"
			>
				<span class="text-sm font-medium">Funkisloppet (5km)</span>
				<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
					></path>
				</svg>
			</a>
		</div>
	</div>
</div>

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
