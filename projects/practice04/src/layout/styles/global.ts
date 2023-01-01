import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Roboto',
  },

  'html, body': {
    minWidth: '100%',
    minHeight: '100%',
    backgroundColor: '$Gray-900',
    color: '$Gray-100',
    '-webkit-font-smoothing': 'antialised',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400
  },

  '.lh-130': {
    lineHeight: '130%',
  },

  '.lh-160': {
    lineHeight: '160%',
  },

  '.etc': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  '.bg-df-gradient': {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  }
})