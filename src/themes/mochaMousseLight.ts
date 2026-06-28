import { Rating } from '../rating'
import type { Theme } from '../theme'


export const mochaMousseLight: Theme = {
  backgroundColor: '#f3ede7',
  textColor: '#362b25',
  textColorSecondary: 'rgba(109, 96, 89, 0.85)',
  badgeColors: {
    [Rating.S]: '#906754',
    [Rating.A]: '#a67c5b',
    [Rating.B]: '#b59a75',
    [Rating.C]: '#6e4c40',
    [Rating.D]: '#84573e',
    [Rating.E]: '#cf413a',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#e8dcd1',
  barForeground: '#906754',
  borderColor: '#dbcec4',
  avatarPlaceholderColor: '#6d6059',
  logoColor: '#362b25',
}
