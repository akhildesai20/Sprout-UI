<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import ThemeDropdown from './ThemeDropdown.vue'

const { site } = useData()
const show = computed(() => {
  const a = site.value?.appearance
  return a && a !== 'force-dark' && a !== 'force-auto'
})
</script>

<template>
  <div
    v-if="show"
    class="VPNavBarAppearance"
  >
    <ThemeDropdown />
  </div>
</template>

<style scoped>
.VPNavBarAppearance {
  display: none;
}

@media (min-width: 1280px) {
  .VPNavBarAppearance {
    display: flex;
    align-items: center;
  }
}
</style>
