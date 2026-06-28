import { Rating } from '../rating'
import type { Theme } from '../theme'


export const sepia: Theme = {
  backgroundColor: '#f4ecd8',
  textColor: '#5b4636',
  textColorSecondary: 'rgba(91, 70, 54, 0.6)',
  badgeColors: {
    [Rating.S]: '#d2b48c',
    [Rating.A]: '#f0e68c',
    [Rating.B]: '#eedd82',
    [Rating.C]: '#ffd700',
    [Rating.D]: '#daa520',
    [Rating.E]: '#cd853f',
  },
  badgeTextColors: {
    [Rating.S]: '#5b4636',
    [Rating.A]: '#5b4636',
    [Rating.B]: '#5b4636',
    [Rating.C]: '#5b4636',
    [Rating.D]: '#5b4636',
    [Rating.E]: '#5b4636',
  },
  barBackground: '#e8dcc2',
  barForeground: '#5b4636',
  borderColor: '#c2b280',
  avatarPlaceholderColor: '#b4a078',
  logoColor: '#5b4636',
}
