<template>
	<div class="container">
		<h1>Club Nights:</h1>
		<div v-for="date in dates">
			<router-link class="button" :to="`/${date.date}`">{{ date.date }}</router-link>
		</div>
	</div>
</template>
<script setup lang="ts">
import { dates } from '@/data/dates';
</script>
