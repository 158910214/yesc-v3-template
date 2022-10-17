import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import AutoImport from 'unplugin-auto-import/vite'
import extractorPug from '@unocss/extractor-pug'
import Unocss from 'unocss/vite'
import { extractorSplit } from '@unocss/core'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
    legacy({
      targets: ['chrome >= 49'], // need terser
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),
    AutoImport({
      imports: ['vue', 'pinia', 'vue-router'],
      dts: './src/auto-imports.d.ts',
      eslintrc: {
        enabled: true
      }
    })
  ]
})
