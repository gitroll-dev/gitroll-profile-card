import { Rating } from '../rating'
import type { Theme } from '../theme'


export const oceanBreezeDark: Theme = {
  backgroundColor: '#071418',
  textColor: '#d6e9ea',
  textColorSecondary: 'rgba(144, 171, 172, 0.85)',
  badgeColors: {
    [Rating.S]: '#00beb7',
    [Rating.A]: '#2bccb4',
    [Rating.B]: '#58d1e5',
    [Rating.C]: '#299fcd',
    [Rating.D]: '#75cca7',
    [Rating.E]: '#f14444',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#000000',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#172428',
  barForeground: '#00beb7',
  borderColor: '#1c3138',
  avatarPlaceholderColor: '#90abac',
  logoColor: '#d6e9ea',
}
