<template>
	<div class="container">
		<h1>{{ name }}</h1>
		<p>{{ date }}</p>

		<div class="tasks">
			<template v-for="task in schedule">
				<div v-if="task.event" class="task-card">
					<div class="event-header">
						<h2>{{ task.time }}</h2>
						<div class="event-details">
							<div>◆ {{ task.event.title }}</div>
							<div v-if="task.event.location">◆ {{ task.event.location }}</div>
							<div v-if="task.event.inCharge">◆ In Charge: {{ task.event.inCharge.join(', ') }}</div>
						</div>
					</div>
					<div class="roll">
						<div class="label">Your Role</div>
						<h4>{{ task.role.title }}</h4>
						<div class="label">Your Responsibilities:</div>
						<ul>
							<li v-for="responsibility in task.role.responsibilities">
								{{ responsibility }}
							</li>
						</ul>
						<div v-if="task.event.notes" v-html="task.event.notes"></div>
						<template v-if="task.event.smallGroupQuestions">
							<ol>
								<li v-for="question in task.event.smallGroupQuestions">{{ question }}</li>
							</ol>
						</template>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { scheduleByDateAndName } from '@/data/dates.js';
import type { Person } from '@/@types/global';
const route = useRoute();
const name = decodeURIComponent(route.params.name!.toString()) as Person;
const date = route.params.date!.toString();

const schedule = scheduleByDateAndName(date, name);
</script>
<style scoped>
.tasks {
	display: grid;
	gap: var(--space-sm);
}
h2 {
	margin: 0;
}
.event-header {
	margin-bottom: var(--space-sm);
	border-bottom: var(--border-width) solid var(--color-ui);
	padding-bottom: var(--space-sm);
}
.event-details {
	opacity: 0.75;
	font-size: 0.8rem;
	display: flex;
	flex-wrap: wrap;
	gap: 0.25rem 1rem;
	font-weight: 600;
	margin-top: 0.5rem;
}
.label {
	font-size: 0.8rem;
	font-weight: 800;
}
.task-card {
	background: var(--color-background-card);
	padding: var(--space-sm);
	border-radius: var(--border-radius);
	box-shadow: 0 0.5rem 1rem var(--color-shadow-muted);
}
</style>
