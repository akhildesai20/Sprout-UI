<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import ThemeDropdown from './ThemeDropdown.vue'

const { site, theme } = useData()
const show = computed(() => {
  const a = site.value?.appearance
  return a && a !== 'force-dark' && a !== 'force-auto'
})
const label = computed(() => theme.value?.darkModeSwitchLabel || 'Appearance')
</script>

<template>
  <div v-if="show" class="VPNavScreenAppearance">
    <p class="text">{{ label }}</p>
    <ThemeDropdown />
  </div>
</template>

<style scoped>
.VPNavScreenAppearance {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 12px 14px 12px 16px;
  background-color: var(--vp-c-bg-soft);
}

.text {
  line-height: 24px;
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
</style>
