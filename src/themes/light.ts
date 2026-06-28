import { Rating } from '../rating'
import type { Theme } from '../theme'


export const light: Theme = {
  backgroundColor: '#fff',
  textColor: '#000',
  textColorSecondary: 'rgba(0, 0, 0, 0.6)',
  badgeColors: {
    [Rating.S]: '#c4b5fd',
    [Rating.A]: '#bbf7d0',
    [Rating.B]: '#d9f99d',
    [Rating.C]: '#fef08a',
    [Rating.D]: '#fed7aa',
    [Rating.E]: '#fecaca',
  },
  badgeTextColors: {
    [Rating.S]: '#000',
    [Rating.A]: '#000',
    [Rating.B]: '#000',
    [Rating.C]: '#000',
    [Rating.D]: '#000',
    [Rating.E]: '#000',
  },
  barBackground: '#F4F4F5',
  barForeground: '#18181B',
  borderColor: '#E4E4E7',
  avatarPlaceholderColor: '#9ca3af',
  logoColor: '#030303',
}
