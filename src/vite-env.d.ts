/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterLink: typeof import('vue-router')['RouterView']
  }
}
