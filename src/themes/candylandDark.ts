import { Rating } from '../rating'
import type { Theme } from '../theme'


export const candylandDark: Theme = {
  backgroundColor: '#1b1d22',
  textColor: '#e4e4e4',
  textColorSecondary: 'rgba(164, 164, 164, 0.85)',
  badgeColors: {
    [Rating.S]: '#ff97cc',
    [Rating.A]: '#2fcd30',
    [Rating.B]: '#87cce8',
    [Rating.C]: '#ffff0e',
    [Rating.D]: '#ffcd00',
    [Rating.E]: '#f14444',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#000000',
    [Rating.C]: '#000000',
    [Rating.D]: '#000000',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#454545',
  barForeground: '#ff97cc',
  borderColor: '#454545',
  avatarPlaceholderColor: '#a4a4a4',
  logoColor: '#e4e4e4',
}
