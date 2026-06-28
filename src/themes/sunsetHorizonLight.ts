import { Rating } from '../rating'
import type { Theme } from '../theme'


export const sunsetHorizonLight: Theme = {
  backgroundColor: '#fff6f3',
  textColor: '#402625',
  textColorSecondary: 'rgba(121, 91, 88, 0.85)',
  badgeColors: {
    [Rating.S]: '#f44d21',
    [Rating.A]: '#f9667a',
    [Rating.B]: '#f6922e',
    [Rating.C]: '#ea5da9',
    [Rating.D]: '#db9500',
    [Rating.E]: '#ea2126',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#fbeae5',
  barForeground: '#f44d21',
  borderColor: '#f4dbd3',
  avatarPlaceholderColor: '#795b58',
  logoColor: '#402625',
}
