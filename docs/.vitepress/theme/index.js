import DefaultTheme from 'vitepress/theme'
import './sprout-scoped.css'
import './vitepress-overrides.css'
import Layout from './Layout.vue'
import VPNavScreenAppearance from './components/VPNavScreenAppearance.vue'

const SPROUT_CUSTOM_ELEMENTS = [
  'sp-dropdown', 'sp-menu', 'sp-menu-item',
  'sp-tabs', 'sp-tab-list', 'sp-tab', 'sp-panel',
]

export default {
  extends: DefaultTheme,
  Layout,
  async enhanceApp(ctx) {
    const { app } = ctx
    app.component('VPNavScreenAppearance', VPNavScreenAppearance)
    app.config.compilerOptions.isCustomElement = (tag) => SPROUT_CUSTOM_ELEMENTS.includes(tag)
    if (typeof DefaultTheme.enhanceApp === 'function') {
      await DefaultTheme.enhanceApp(ctx)
    }
    const mod = await import('../../../src/sprout.js')
    const Sprout = mod.default || mod
    window.Sprout = Sprout
    if (Sprout.init) {
      Sprout.init()
    }
  }
}
