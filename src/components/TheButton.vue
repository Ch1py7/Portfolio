<script setup lang="ts">
import { inject } from 'vue'
import { LightMode } from '../types/GeneralTypes'
import MoonIcon from './icons/MoonIcon.vue'
import SunIcon from './icons/SunIcon.vue'

const { isLight } = inject<LightMode>('isLight')!

const setLight = () => {
	isLight.value = !isLight.value
}
</script>

<template>
  <button :aria-label="isLight ? 'second mode' : 'first mode'" :title="isLight ? 'second mode' : 'first mode'"
    type="button" @click="setLight" :class="{ active: isLight === true }">
    <span :class="{ anim: isLight === true }">
      <SunIcon v-if="isLight === true" />
      <MoonIcon v-else />
    </span>
  </button>
</template>

<style scoped>
button {
  position: relative;
  display: flex;
  align-items: center;
  height: 2.4rem;
  width: 4.4rem;
  margin-right: 1rem;
  border: solid 1px #343434;
  border-radius: 2.2rem;
  background-color: #2b2b2b;
  cursor: pointer;
}

@media(max-width: 430px) {
  button {
    margin-right: 0;
  }
}

span {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  transition: transform 0.2s linear;
}

span.anim {
  transform: translateX(2rem);
}

button.active {
  background-color: #cae4f9;
}
</style>
