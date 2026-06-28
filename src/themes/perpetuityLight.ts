import { Rating } from '../rating'
import type { Theme } from '../theme'


export const perpetuityLight: Theme = {
  backgroundColor: '#e7f1f1',
  textColor: '#1b3234',
  textColorSecondary: 'rgba(79, 105, 106, 0.85)',
  badgeColors: {
    [Rating.S]: '#188586',
    [Rating.A]: '#3c9888',
    [Rating.B]: '#57a6b4',
    [Rating.C]: '#17726d',
    [Rating.D]: '#2b9095',
    [Rating.E]: '#d73431',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#d6e9e9',
  barForeground: '#188586',
  borderColor: '#c9dcdc',
  avatarPlaceholderColor: '#4f696a',
  logoColor: '#1b3234',
}
