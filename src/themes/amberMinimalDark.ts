import { Rating } from '../rating'
import type { Theme } from '../theme'


export const amberMinimalDark: Theme = {
  backgroundColor: '#161616',
  textColor: '#e4e4e4',
  textColorSecondary: 'rgba(164, 164, 164, 0.85)',
  badgeColors: {
    [Rating.S]: '#fbc031',
    [Rating.A]: '#db7800',
    [Rating.B]: '#8f4113',
    [Rating.C]: '#b75301',
    [Rating.D]: '#8f4113',
    [Rating.E]: '#f14444',
  },
  badgeTextColors: {
    [Rating.S]: '#000000',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#262626',
  barForeground: '#f49f1e',
  borderColor: '#404040',
  avatarPlaceholderColor: '#a4a4a4',
  logoColor: '#e4e4e4',
}
