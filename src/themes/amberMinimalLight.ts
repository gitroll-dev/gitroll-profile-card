import { Rating } from '../rating'
import type { Theme } from '../theme'


export const amberMinimalLight: Theme = {
  backgroundColor: '#ffffff',
  textColor: '#262626',
  textColorSecondary: 'rgba(108, 114, 126, 0.85)',
  badgeColors: {
    [Rating.S]: '#f49f1e',
    [Rating.A]: '#db7800',
    [Rating.B]: '#b75301',
    [Rating.C]: '#8f4113',
    [Rating.D]: '#793207',
    [Rating.E]: '#f14444',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#f8f8f8',
  barForeground: '#f49f1e',
  borderColor: '#e4e8ef',
  avatarPlaceholderColor: '#6c727e',
  logoColor: '#262626',
}
