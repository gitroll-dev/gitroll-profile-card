import { Rating } from '../rating'
import type { Theme } from '../theme'


export const pastelDreamsDark: Theme = {
  backgroundColor: '#161423',
  textColor: '#e9e1ef',
  textColorSecondary: 'rgba(176, 165, 192, 0.85)',
  badgeColors: {
    [Rating.S]: '#c9a3f5',
    [Rating.A]: '#94bfff',
    [Rating.B]: '#6bd8de',
    [Rating.C]: '#fab0d9',
    [Rating.D]: '#90d192',
    [Rating.E]: '#f14444',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#000000',
    [Rating.B]: '#000000',
    [Rating.C]: '#000000',
    [Rating.D]: '#000000',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#262434',
  barForeground: '#c9a3f5',
  borderColor: '#322f46',
  avatarPlaceholderColor: '#b0a5c0',
  logoColor: '#e9e1ef',
}
