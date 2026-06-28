import { Rating } from '../rating'
import type { Theme } from '../theme'


export const neoBrutalismDark: Theme = {
  backgroundColor: '#000000',
  textColor: '#ffffff',
  textColorSecondary: 'rgba(174, 174, 174, 0.85)',
  badgeColors: {
    [Rating.S]: '#ff3f3d',
    [Rating.A]: '#ff802c',
    [Rating.B]: '#ffcc2f',
    [Rating.C]: '#4292ff',
    [Rating.D]: '#00b224',
    [Rating.E]: '#ffffff',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#000000',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#000000',
  },
  barBackground: '#1b1b1b',
  barForeground: '#ff3f3d',
  borderColor: '#ffffff',
  avatarPlaceholderColor: '#aeaeae',
  logoColor: '#ffffff',
}
