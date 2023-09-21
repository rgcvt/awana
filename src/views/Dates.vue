<template>
	<div class="container">
		<h1>Club Nights:</h1>
		<div v-for="date in dates">
			<router-link class="button" :to="`/${date.date}`">{{
				date.date
			}}</router-link>
		</div>
	</div>
</template>
<script setup>
import { dates } from '@/data/dates.js';
</script>
<style scoped lang="scss"></style>
