import { Rating } from '../rating'
import type { Theme } from '../theme'


export const elegantLuxuryLight: Theme = {
  backgroundColor: '#fef7f2',
  textColor: '#1f1916',
  textColorSecondary: 'rgba(109, 96, 89, 0.85)',
  badgeColors: {
    [Rating.S]: '#ac1922',
    [Rating.A]: '#b37903',
    [Rating.B]: '#b79c51',
    [Rating.C]: '#6c352d',
    [Rating.D]: '#ab5637',
    [Rating.E]: '#cc2827',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#f4e9dd',
  barForeground: '#ac1922',
  borderColor: '#e8dbd1',
  avatarPlaceholderColor: '#6d6059',
  logoColor: '#1f1916',
}
