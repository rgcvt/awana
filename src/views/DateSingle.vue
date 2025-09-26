<template>
	<div class="container">
		<h1>{{ date?.date }}</h1>
		<section class="time-period" v-for="time in date?.schedule">
			<header>
				<div class="time">{{ time.time }}</div>
			</header>
			<div class="events">
				<div class="event" v-for="event in time.events">
					<div class="event-header">
						<h3>{{ event.title }}</h3>

						<div v-if="event.location" class="event-location">
							{{ event.location }}
						</div>
						<div v-if="event.description" class="event-description">
							{{ event.description }}
						</div>
						<div class="event-notes" v-if="event.notes" v-html="event.notes"></div>
					</div>

					<div class="event-staff">
						<div v-if="event.inCharge"><strong>In Charge: </strong>{{ event.inCharge.join(', ') }}</div>
						<div v-if="Object.keys(event.roles).length">
							<strong>Staff: </strong>
							<template v-for="names in event.roles">
								<router-link
									class="person-link"
									v-for="name in names"
									:to="`/${date?.date}/${encodeURIComponent(name)}`"
								>
									{{ name }}
								</router-link>
							</template>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { dates } from '@/data/dates';
const route = useRoute();

const date = dates.find((d) => d.date == route.params.date);
</script>
<style scoped>
h3 {
	margin: 0;
}
h4 {
	font-weight: 600;
	font-size: 1rem;
}
.container {
	display: grid;
	gap: var(--space-lg);
}

.time-period {
	display: flex;
	gap: var(--space-sm);
	border-top: var(--border-width) solid var(--color-ui);
	padding: var(--space-md) 0;
}
.time-period header {
	width: 5rem;
	flex-shrink: 0;
}
.time-period header .time {
	font-weight: 800;
	position: sticky;
	top: var(--space-sm);
}

.events {
	display: grid;
	gap: 3rem;
}
.event {
}
.event-location {
	font-size: 0.8rem;
	font-weight: 800;
	margin: 0.25rem 0 0.75rem 0;
	color: var(--color-text-muted);
}
.event-staff {
	> * {
		margin: 0.5rem 0;
	}
}
.person-link {
	line-height: 1;
	color: var(--color-background);
	background: var(--color-link-default);
	font-size: 0.8rem;
	padding: 0.2rem 0.4rem;
	display: inline-block;
	margin: 0.25rem;
	border-radius: var(--border-radius);
	&:hover,
	&:focus {
		background: var(--color-link-hover);
	}
}
</style>
