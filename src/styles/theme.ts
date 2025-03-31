export const theme = {
  colors: {
    primary: '#000000',
    secondary: '#FFFFFF',
    highlight: '#FFD700',
    background: {
      dark: '#000000',
      light: '#FFFFFF',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#E0E0E0',
    },
    neon: {
      yellow: '#FFD700',
      blue: '#00FFFF',
      green: '#00FF00',
      purple: '#FF00FF',
      red: '#FF0000'
    },
  },
  glass: {
    background: 'rgba(255, 255, 255, 0.1)',
    blur: '10px',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    large: '1440px',
  },
} as const;