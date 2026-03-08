/**
 * Sprout UI — IIFE with public Sprout object.
 * Section 8 + 7.8, 7.13, 7.15, 7.16, 7.17.
 */
const Sprout = (() => {
  const ROOT = document.documentElement;
  const TOAST_DEFAULT_DURATION = 4000;
  const TOAST_POSITIONS = [
    "top-right",
    "top-left",
    "bottom-right",
    "bottom-left",
    "top-center",
  ];

  // --- Theme API ---
  function setTheme(theme) {
    if (theme === "auto" || !theme) {
      ROOT.removeAttribute("data-theme");
    } else {
      ROOT.setAttribute("data-theme", theme);
    }
  }

  function getTheme() {
    return ROOT.getAttribute("data-theme") || "auto";
  }

  function toggleTheme() {
    const current = getTheme();
    if (current === "dark") setTheme("light");
    else if (current === "light") setTheme("dark");
    else if (current === "auto") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "light" : "dark");
    }
  }

  // --- Modal: event delegation, focus trap, backdrop close ---
  function getFocusableNodes(dialog) {
    const selector = "button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])";
    const nodes = dialog.querySelectorAll(selector);
    return Array.from(nodes).filter((el) => !el.hasAttribute("disabled"));
  }

  function trapFocus(dialog) {
    function keydown(e) {
      if (e.key !== "Tab") return;
      const focusable = getFocusableNodes(dialog);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    dialog.addEventListener("keydown", keydown);
    dialog.addEventListener("close", () => dialog.removeEventListener("keydown", keydown), { once: true });
  }

  function initModal() {
    // Listener ONLY for opening — early return so we don't run close logic
    document.body.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-modal]");
      if (!trigger) return;
      const id = trigger.dataset.modal;
      if (!id) return;
      const dialog = document.getElementById(id);
      if (!dialog || dialog.tagName !== "DIALOG") return;
      dialog.showModal();
      trapFocus(dialog);
    });

    // Separate listener ONLY for closing (data-modal-close)
    document.body.addEventListener("click", (e) => {
      const closer = e.target.closest("[data-modal-close]");
      if (!closer) return;
      const dialog = closer.closest("dialog");
      if (dialog) dialog.close();
    });

    // Separate listener for backdrop click (click on dialog itself)
    document.body.addEventListener("click", (e) => {
      const dialog = e.target;
      if (dialog.tagName !== "DIALOG" || !dialog.open) return;
      dialog.close();
    });

  }

  // --- Dismissible alerts ---
  function initDismissibleAlerts() {
    document.body.addEventListener("click", (e) => {
      const closeBtn = e.target.closest("[data-dismiss-alert]");
      if (!closeBtn) return;
      const alert = closeBtn.closest("[role=\"alert\"][data-dismissible]");
      if (!alert) return;
      alert.style.transition = "opacity 200ms ease";
      alert.style.opacity = "0";
      setTimeout(() => alert.setAttribute("data-dismissed", "true"), 200);
    });
  }

  // --- Toast queue ---
  let toastContainer = null;

  function getToastContainer(position = "top-right") {
    if (toastContainer && !document.contains(toastContainer)) {
      toastContainer = null;
    }
    if (!toastContainer) {
      toastContainer = document.createElement("div");
      toastContainer.id = "sp-toast-container";
      document.body.appendChild(toastContainer);
    }
    toastContainer.setAttribute("data-position", TOAST_POSITIONS.includes(position) ? position : "top-right");
    return toastContainer;
  }

  function toast(message, options = {}) {
    const { type, duration = TOAST_DEFAULT_DURATION, position = "top-right" } = options;
    const container = getToastContainer(position);
    const el = document.createElement("div");
    el.setAttribute("data-sp-toast", "true");
    if (type) el.setAttribute("data-type", type);
    el.textContent = message;
    container.appendChild(el);

    if (duration > 0) {
      setTimeout(() => {
        el.style.opacity = "0";
        el.style.transform = "scale(0.98)";
        setTimeout(() => el.remove(), 200);
      }, duration);
    }
  }

  // --- Copy button [data-copy] ---
  function initCopyButton() {
    document.body.addEventListener("click", (e) => {
      if (e.target.closest(".copy-btn, [data-copy-target]")) return;
      const block = e.target.closest("[data-copy]");
      if (!block) return;
      const code = block.querySelector("code") || block;
      const text = code.textContent || code.innerText || "";
      if (!text) return;
      navigator.clipboard.writeText(text).then(() => {
        toast("Copied!", { type: "success", duration: 2000 });
      }).catch(() => {});
    });
  }

  // Mobile nav: add this button inside your <nav> before the <ul>:
  // <button data-nav-toggle aria-expanded="false" aria-label="Toggle navigation"
  //   class="icon ghost" style="margin-left:auto">☰</button>
  //
  // Mobile sidebar: add this button anywhere:
  // <button data-sidebar-toggle aria-controls="my-sidebar"
  //   aria-expanded="false" aria-label="Open menu">☰</button>

  function initNavCollapse() {
    document.body.addEventListener("click", (e) => {
      const toggle = e.target.closest("[data-nav-toggle]");
      if (!toggle) return;
      const nav = toggle.closest("nav") || document.querySelector("nav");
      if (!nav) return;
      const isOpen = nav.hasAttribute("data-nav-open");
      if (isOpen) {
        nav.removeAttribute("data-nav-open");
        toggle.setAttribute("aria-expanded", "false");
      } else {
        nav.setAttribute("data-nav-open", "");
        toggle.setAttribute("aria-expanded", "true");
      }
    });
    document.body.addEventListener("click", (e) => {
      if (e.target.closest("nav")) return;
      document.querySelectorAll("nav[data-nav-open]").forEach((nav) => {
        nav.removeAttribute("data-nav-open");
        const t = nav.querySelector("[data-nav-toggle]");
        if (t) t.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initSidebarCollapse() {
    document.body.addEventListener("click", (e) => {
      const toggle = e.target.closest("[data-sidebar-toggle]");
      if (!toggle) return;
      const targetId = toggle.getAttribute("aria-controls");
      const sidebar = (targetId && document.getElementById(targetId))
        || document.querySelector(".sidebar");
      if (!sidebar) return;
      const isOpen = sidebar.hasAttribute("data-open");
      if (isOpen) {
        sidebar.removeAttribute("data-open");
        toggle.setAttribute("aria-expanded", "false");
      } else {
        sidebar.setAttribute("data-open", "");
        toggle.setAttribute("aria-expanded", "true");
      }
    });
    document.body.addEventListener("click", (e) => {
      if (e.target.closest(".sidebar") || e.target.closest("[data-sidebar-toggle]")) return;
      document.querySelectorAll(".sidebar[data-open]").forEach((s) => {
        s.removeAttribute("data-open");
      });
    });
  }

  // --- Simple tooltip enhancement (dynamic tooltips) ---
  let tooltipEl = null;

  function tooltip(element, text, options = {}) {
    if (!element || !text) return;
    const { position = "top" } = options;

    function show() {
      if (tooltipEl) tooltipEl.remove();
      tooltipEl = document.createElement("div");
      tooltipEl.setAttribute("role", "tooltip");
      tooltipEl.className = "sp-tooltip-js";
      tooltipEl.textContent = text;
      tooltipEl.style.cssText = "position:fixed;z-index:99999;max-width:200px;padding:6px 8px;font-size:12px;line-height:1.4;background:var(--sp-surface-2,#1a1d1a);color:var(--sp-text,#eaece8);border:1px solid var(--sp-border,#2e332e);border-radius:5px;pointer-events:none;box-shadow:0 2px 8px rgba(0,0,0,0.3);";
      document.body.appendChild(tooltipEl);

      const rect = element.getBoundingClientRect();
      const ttRect = tooltipEl.getBoundingClientRect();
      let left = rect.left + (rect.width / 2) - (ttRect.width / 2);
      let top = rect.top - ttRect.height - 6;
      if (position === "bottom") top = rect.bottom + 6;
      if (position === "left") { left = rect.left - ttRect.width - 6; top = rect.top + (rect.height / 2) - (ttRect.height / 2); }
      if (position === "right") { left = rect.right + 6; top = rect.top + (rect.height / 2) - (ttRect.height / 2); }
      tooltipEl.style.left = Math.max(4, left) + "px";
      tooltipEl.style.top = Math.max(4, top) + "px";
    }

    function hide() {
      if (tooltipEl) {
        tooltipEl.remove();
        tooltipEl = null;
      }
    }

    element.addEventListener("mouseenter", show);
    element.addEventListener("mouseleave", hide);
    element.addEventListener("focus", show);
    element.addEventListener("blur", hide);
  }

  // --- <sp-tabs> Web Component ---
  class SpTabs extends HTMLElement {
    static get observedAttributes() {
      return [];
    }

    connectedCallback() {
      this.tabList = this.querySelector("sp-tab-list");
      if (!this.tabList) return;
      this.tabs = Array.from(this.tabList.querySelectorAll("sp-tab"));
      this.panels = Array.from(this.querySelectorAll("sp-panel"));
      const firstPanelId = this.tabs[0] && this.tabs[0].getAttribute("panel");
      this.tabs.forEach((tab, i) => {
        tab.setAttribute("role", "tab");
        tab.setAttribute("tabindex", i === 0 ? "0" : "-1");
        tab.setAttribute("aria-selected", i === 0 ? "true" : "false");
        const panelId = tab.getAttribute("panel");
        if (panelId) {
          tab.setAttribute("aria-controls", panelId);
          const panel = document.getElementById(panelId);
          if (panel) {
            panel.setAttribute("role", "tabpanel");
            panel.setAttribute("aria-labelledby", tab.id || "sp-tab-" + i);
            panel.hidden = panelId !== firstPanelId;
          }
        }
        tab.addEventListener("click", () => this.selectTab(i));
        tab.addEventListener("keydown", (e) => this.handleKey(e, i));
      });
      this.tabList.setAttribute("role", "tablist");
      this.selectedIndex = 0;
    }

    selectTab(index) {
      const panelId = this.tabs[index] && this.tabs[index].getAttribute("panel");
      this.tabs.forEach((t, i) => {
        t.setAttribute("aria-selected", i === index ? "true" : "false");
        t.setAttribute("tabindex", i === index ? "0" : "-1");
      });
      this.panels.forEach((p) => {
        p.hidden = p.id !== panelId;
      });
      this.selectedIndex = index;
      this.tabs[index].focus();
    }

    handleKey(e, currentIndex) {
      let next = currentIndex;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (currentIndex + 1) % this.tabs.length;
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (currentIndex - 1 + this.tabs.length) % this.tabs.length;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = this.tabs.length - 1;
      else return;
      e.preventDefault();
      this.selectTab(next);
    }
  }

  class SpTab extends HTMLElement {}
  class SpTabList extends HTMLElement {}
  class SpPanel extends HTMLElement {}

  // --- <sp-dropdown> Web Component ---
  class SpDropdown extends HTMLElement {
    constructor() {
      super();
      this._boundClose = (e) => {
        const path = e.composedPath ? e.composedPath() : [];
        const inside = this.contains(e.target) || path.indexOf(this) !== -1;
        if (inside) return;
        this.close();
      };
    }

    connectedCallback() {
      if (this._initialized) return;
      this._trySetup();
      if (this._initialized) return;
      this._observer = new MutationObserver(() => this._trySetup());
      this._observer.observe(this, { childList: true, subtree: true });
    }

    _trySetup() {
      if (this._initialized) return;
      this.trigger = this.querySelector('[slot="trigger"]');
      this.menu = this.querySelector("sp-menu");
      if (!this.trigger || !this.menu) return;
      this._initialized = true;
      if (this._observer) {
        this._observer.disconnect();
        this._observer = null;
      }
      this.menu.hidden = true;
      this._boundTriggerClick = (e) => {
        const path = e.composedPath ? e.composedPath() : [];
        const triggerEl = this.querySelector('[slot="trigger"]');
        const clickedTrigger = triggerEl && (path.indexOf(triggerEl) !== -1 || e.target === triggerEl || triggerEl.contains(e.target));
        if (!triggerEl || !clickedTrigger) return;
        e.stopPropagation();
        this.isOpen ? this.close() : this.open();
      };
      this._boundMenuKey = (e) => this.handleMenuKey(e);
      this._boundMenuClick = (e) => {
        if (e.target.closest("sp-menu-item")) this.close();
      };
      this.addEventListener("click", this._boundTriggerClick);
      document.addEventListener("click", this._boundClose);
      this.menu.addEventListener("keydown", this._boundMenuKey);
      this.menu.addEventListener("click", this._boundMenuClick);
    }

    disconnectedCallback() {
      if (this._observer) {
        this._observer.disconnect();
        this._observer = null;
      }
      if (!this._initialized) return;
      this.removeEventListener("click", this._boundTriggerClick);
      document.removeEventListener("click", this._boundClose);
      if (this.menu) {
        this.menu.removeEventListener("keydown", this._boundMenuKey);
        this.menu.removeEventListener("click", this._boundMenuClick);
      }
      this._initialized = false;
      this.trigger = null;
      this.menu = null;
    }

    get isOpen() {
      return this.menu ? !this.menu.hidden : false;
    }

    open() {
      this.menu.hidden = false;
      const first = this.menu.querySelector("sp-menu-item");
      if (first) first.focus();
    }

    close() {
      this.menu.hidden = true;
      const triggerEl = this.querySelector('[slot="trigger"]');
      if (triggerEl) triggerEl.focus();
    }

    handleMenuKey(e) {
      if (e.key === "Escape") {
        this.close();
        return;
      }
      const items = Array.from(this.menu.querySelectorAll("sp-menu-item"));
      const current = items.indexOf(e.target);
      if (e.key === "ArrowDown" && current < items.length - 1) {
        e.preventDefault();
        items[current + 1].focus();
      } else if (e.key === "ArrowUp" && current > 0) {
        e.preventDefault();
        items[current - 1].focus();
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.target.click();
        this.close();
      }
    }
  }

  class SpMenu extends HTMLElement {
    connectedCallback() {
      this.setAttribute("role", "menu");
      this.querySelectorAll("sp-menu-item").forEach((item) => {
        item.setAttribute("role", "menuitem");
        item.setAttribute("tabindex", "0");
      });
    }
  }

  class SpMenuItem extends HTMLElement {
    connectedCallback() {
      if (!this.hasAttribute("role")) this.setAttribute("role", "menuitem");
      if (!this.hasAttribute("tabindex")) this.setAttribute("tabindex", "0");
    }
  }

  // --- Register components and init ---
  let _initialized = false;
  function init() {
    if (_initialized) return;
    _initialized = true;
    if (typeof customElements !== "undefined") {
      customElements.define("sp-tabs", SpTabs);
      customElements.define("sp-tab-list", SpTabList);
      customElements.define("sp-tab", SpTab);
      customElements.define("sp-panel", SpPanel);
      customElements.define("sp-dropdown", SpDropdown);
      customElements.define("sp-menu", SpMenu);
      customElements.define("sp-menu-item", SpMenuItem);
    }
    initModal();
    initDismissibleAlerts();
    initCopyButton();
    initNavCollapse();
    initSidebarCollapse();
  }

  return {
    init,
    setTheme,
    getTheme,
    toggleTheme,
    toast,
    tooltip,
  };
})();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", Sprout.init);
} else {
  Sprout.init();
}

export default Sprout;
