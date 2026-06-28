import { Rating } from '../rating'
import type { Theme } from '../theme'


export const graphiteLight: Theme = {
  backgroundColor: '#f2f2f2',
  textColor: '#333333',
  textColorSecondary: 'rgba(99, 99, 99, 0.85)',
  badgeColors: {
    [Rating.S]: '#606060',
    [Rating.A]: '#505050',
    [Rating.B]: '#747474',
    [Rating.C]: '#9b9b9b',
    [Rating.D]: '#404040',
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
  barBackground: '#e4e4e4',
  barForeground: '#606060',
  borderColor: '#cecece',
  avatarPlaceholderColor: '#636363',
  logoColor: '#333333',
}
