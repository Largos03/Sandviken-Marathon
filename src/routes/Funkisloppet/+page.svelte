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
