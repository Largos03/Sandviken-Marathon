<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faClock, faChevronRight } from '@fortawesome/free-solid-svg-icons';
	import { tStore } from '$lib/stores/i18n';

	$: t = $tStore;
</script>

<div class="rounded-2xl bg-gray-50 p-4 shadow-sm sm:p-6 md:p-8">
	<div class="mb-6 flex items-center">
		<div class="icon-container-lg mr-4 bg-black">
			<FontAwesomeIcon icon={faClock} size="lg" />
		</div>
		<div>
			<h3 class="text-2xl font-bold">{t('raceDaySchedule')}</h3>
			<p class="text-gray-500">{t('raceDayDate')}</p>
		</div>
	</div>

	<div class="relative">
		<div class="absolute top-0 bottom-0 left-4 w-0.5 bg-red-500/20"></div>
		<div class="space-y-6">
			<div class="relative flex items-start">
				<div
					class="absolute left-4 mt-1.5 h-3 w-3 -translate-x-1/2 transform rounded-full bg-red-500"
				></div>
				<div class="pl-10">
					<div class="text-lg font-bold text-gray-900">{t('raceVillageOpens')}</div>
					<div class="text-gray-600">{t('raceVillageOpensText')}</div>
				</div>
			</div>
			<div class="relative flex items-start">
				<div
					class="absolute left-4 mt-1.5 h-3 w-3 -translate-x-1/2 transform rounded-full bg-red-500"
				></div>
				<div class="pl-10">
					<div class="text-lg font-bold text-gray-900">{t('halfMarathonStart')}</div>
					<div class="text-gray-600">{t('halfMarathonStartText')}</div>
				</div>
			</div>
			<div class="relative flex items-start">
				<div
					class="absolute left-4 mt-1.5 h-3 w-3 -translate-x-1/2 transform rounded-full bg-red-500"
				></div>
				<div class="pl-10">
					<div class="text-lg font-bold text-gray-900">{t('tenKStart')}</div>
					<div class="text-gray-600">{t('tenKStartText')}</div>
				</div>
			</div>
		</div>
	</div>

	<div class="mt-8 text-center">
		<a href="/about" class="btn-hero">
			<span>{t('fullSchedule')}</span>
			<FontAwesomeIcon icon={faChevronRight} class="ml-2" />
		</a>
	</div>
</div>
