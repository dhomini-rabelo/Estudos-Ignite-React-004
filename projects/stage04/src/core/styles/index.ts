import { createStitches } from '@stitches/react'

export const {
  config, styled, globalCss, keyframes, getCssText, theme, createTheme, css
} = createStitches({
  theme: {
    colors: {
      White: '#fff',

      'Gray-900': '#121214',
      'Gray-800': '#202024',
      'Gray-300': '#c4c4cc',
      'Gray-100': '#e1e1e6',

      'Green-500': '#00875f',
      'Green-300': '#00b37e'
    }
  }
})