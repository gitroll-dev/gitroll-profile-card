import { Rating } from '../rating'
import type { Theme } from '../theme'


export const doom64Light: Theme = {
  backgroundColor: '#d1d1d1',
  textColor: '#161616',
  textColorSecondary: 'rgba(72, 72, 72, 0.85)',
  badgeColors: {
    [Rating.S]: '#d40c1a',
    [Rating.A]: '#895800',
    [Rating.B]: '#4c5b3d',
    [Rating.C]: '#1e7ca1',
    [Rating.D]: '#643b9a',
    [Rating.E]: '#7f2021',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#b7b7b7',
  barForeground: '#d40c1a',
  borderColor: '#9e9e9e',
  avatarPlaceholderColor: '#484848',
  logoColor: '#161616',
}
