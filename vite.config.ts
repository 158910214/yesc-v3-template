import path from 'node:path'
import Pages from 'vite-plugin-pages'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import extractorPug from '@unocss/extractor-pug'
import { extractorSplit } from '@unocss/core'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    Pages({
      dirs: 'src/pages',
    }),
    vueJsx(),
    Unocss({
      extractors: [extractorPug(), extractorSplit]
    }),
    legacy({
      targets: ['chrome >= 49'], // need terser
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),
    AutoImport({
      imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
      dirs: [path.resolve(pathSrc, 'composables')],
      dts: path.resolve(pathSrc, 'typings/auto-import.d.ts')
    }),
    Components({
      dts: path.resolve(pathSrc, 'typings/components.d.ts')
    })
  ]
})
