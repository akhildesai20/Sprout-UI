<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useData } from 'vitepress'

const THEME_KEY = 'sprout-docs-theme'
const VP_APPEARANCE_KEY = 'vitepress-theme-appearance'

const { isDark } = useData()
const open = ref(false)
const menu = ref(null)
let mediaQuery = null

const options = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'high-contrast', label: 'High contrast' },
  { value: 'auto', label: 'Auto' },
]

function getStoredTheme() {
  if (typeof localStorage === 'undefined') return null
  return localStorage.getItem(THEME_KEY)
}

function applyTheme(value) {
  const root = document.documentElement
  if (value === 'auto' || !value) {
    root.removeAttribute('data-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = prefersDark
  } else {
    root.setAttribute('data-theme', value)
    isDark.value = value === 'dark' || value === 'high-contrast'
  }
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(THEME_KEY, value || 'auto')
    localStorage.setItem(VP_APPEARANCE_KEY, isDark.value ? 'dark' : 'light')
  }
}

const currentTheme = ref('dark')

onMounted(() => {
  const stored = getStoredTheme()
  if (stored) {
    currentTheme.value = stored
    applyTheme(stored)
  } else {
    const root = document.documentElement
    const vp = typeof localStorage !== 'undefined' ? localStorage.getItem(VP_APPEARANCE_KEY) : null
    const theme = vp === 'dark' ? 'dark' : 'light'
    currentTheme.value = theme
    root.setAttribute('data-theme', theme)
  }
  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', onSystemThemeChange)
})

onUnmounted(() => {
  if (mediaQuery) mediaQuery.removeEventListener('change', onSystemThemeChange)
})

function onSystemThemeChange() {
  if (currentTheme.value === 'auto') applyTheme('auto')
}

watch(isDark, (val) => {
  const stored = getStoredTheme()
  if (!stored) {
    currentTheme.value = val ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', currentTheme.value)
  }
})

function close() {
  open.value = false
  document.removeEventListener('click', handleClickOutside)
}

function select(value) {
  currentTheme.value = value
  applyTheme(value)
  close()
}

function handleClickOutside(e) {
  if (menu.value && !menu.value.contains(e.target)) close()
}

function toggle() {
  open.value = !open.value
  if (open.value) {
    requestAnimationFrame(() => document.addEventListener('click', handleClickOutside))
  } else {
    document.removeEventListener('click', handleClickOutside)
  }
}

const currentLabel = computed(() => {
  const o = options.find(opt => opt.value === currentTheme.value)
  return o ? o.label : 'Theme'
})
</script>

<template>
  <div class="ThemeDropdown" ref="menu">
    <button
      type="button"
      class="ThemeDropdownTrigger"
      :aria-expanded="open"
      aria-haspopup="listbox"
      aria-label="Theme"
      @click="toggle"
    >
      <span class="ThemeDropdownLabel">{{ currentLabel }}</span>
      <span class="ThemeDropdownChevron" aria-hidden="true">▾</span>
    </button>
    <div v-show="open" class="ThemeDropdownMenu" role="listbox">
      <button
        v-for="opt in options"
        :key="opt.value"
        type="button"
        role="option"
        :aria-selected="currentTheme === opt.value"
        class="ThemeDropdownItem"
        :class="{ active: currentTheme === opt.value }"
        @click="select(opt.value)"
      >
        {{ opt.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.ThemeDropdown {
  position: relative;
  display: flex;
  align-items: center;
}

.ThemeDropdownTrigger {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  font-size: 13px;
  line-height: 1.4;
  color: var(--vp-c-text-2);
  background: transparent;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}

.ThemeDropdownTrigger:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand-1);
}

.ThemeDropdownChevron {
  font-size: 10px;
  opacity: 0.8;
}

.ThemeDropdownMenu {
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  min-width: 140px;
  padding: 4px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 100;
}

.dark .ThemeDropdownMenu {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.ThemeDropdownItem {
  display: block;
  width: 100%;
  padding: 6px 10px;
  font-size: 13px;
  text-align: left;
  color: var(--vp-c-text-2);
  background: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.ThemeDropdownItem:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
}

.ThemeDropdownItem.active {
  color: var(--vp-c-brand-1);
  font-weight: 500;
}
</style>
