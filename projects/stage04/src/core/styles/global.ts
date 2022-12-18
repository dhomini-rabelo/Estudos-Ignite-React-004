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
    backgroundColor: '$gray900',
    color: '$gray100',
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
  }
})