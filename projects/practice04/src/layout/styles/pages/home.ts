import { styled } from "..";

export const Div = {
  container: styled('div', {
    maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
    minHeight: 656,
  })
}

export const A = {
  product: styled('a', {
    position: 'relative',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    overflow: 'hidden',

    img: {
      objectFit: 'cover',
    },

    footer: {
      position: 'absolute',
      bottom: '0.25rem',
      left: '0.25rem',
      right: '0.25rem',
      borderRadius: 6,
      backgroundColor: 'rgba(0,0,0,0.6)',
      padding: '2rem',
      transform: 'translateY(110%)',
      opacity: 0,
      transition: 'all 0.2s ease-in-out',
    },

    '&:hover': {
      footer: {
        transform: 'translateY(0%)',
        opacity: 1,
      }
    }
  })
}