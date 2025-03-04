<script setup lang="ts">
import CSS from './icons/CssIcon.vue'
import HTML from './icons/HtmlIcon.vue'
import PythonIcon from './icons/PythonIcon.vue'
import TypeScript from './icons/TypeScript.vue'
import Vue from './icons/VueIcon.vue'

defineProps<{
	id: string
	name: string
}>()
</script>

<template>
  <template v-if="name === 'TypeScript'">
    <TypeScript />
  </template>
  <template v-else-if="name === 'CSS'">
    <CSS />
  </template>
  <template v-else-if="name === 'HTML'">
    <HTML />
  </template>
  <template v-else-if="name === 'Vue'">
    <Vue />
  </template>
  <template v-else-if="name === 'Python'">
    <PythonIcon />
  </template>
</template>

<style scoped></style>
