import { Rating } from '../rating'
import type { Theme } from '../theme'


export const candylandLight: Theme = {
  backgroundColor: '#f8f8f8',
  textColor: '#333333',
  textColorSecondary: 'rgba(111, 111, 111, 0.85)',
  badgeColors: {
    [Rating.S]: '#fec2cc',
    [Rating.A]: '#87cce8',
    [Rating.B]: '#ffff0e',
    [Rating.C]: '#ff97cc',
    [Rating.D]: '#2fcd30',
    [Rating.E]: '#f14444',
  },
  badgeTextColors: {
    [Rating.S]: '#000000',
    [Rating.A]: '#000000',
    [Rating.B]: '#000000',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#dcd8c2',
  barForeground: '#fec2cc',
  borderColor: '#d4d4d4',
  avatarPlaceholderColor: '#6f6f6f',
  logoColor: '#333333',
}
