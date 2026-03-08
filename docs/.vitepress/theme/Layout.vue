<script setup>
import DefaultTheme from 'vitepress/theme'
import ThemeDropdown from './components/ThemeDropdown.vue'
</script>

<template>
  <DefaultTheme.Layout>
    <template #nav-bar-content-after>
      <div class="SproutThemeDropdownWrap">
        <ThemeDropdown />
      </div>
    </template>
  </DefaultTheme.Layout>
</template>
