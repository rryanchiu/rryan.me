// uno.config.ts
import { defineConfig } from 'unocss'

import { presetAttributify, presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'
export default defineConfig({
    presets: [
        presetIcons(),
        presetAttributify(),
        presetUno({
            dark: 'media'
        }),
    ],
})