import { Rating } from '../rating'
import type { Theme } from '../theme'


export const neoBrutalismLight: Theme = {
  backgroundColor: '#ffffff',
  textColor: '#000000',
  textColorSecondary: 'rgba(72, 72, 72, 0.85)',
  badgeColors: {
    [Rating.S]: '#ff3132',
    [Rating.A]: '#f9700e',
    [Rating.B]: '#febf12',
    [Rating.C]: '#2e7eff',
    [Rating.D]: '#009f00',
    [Rating.E]: '#000000',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#000000',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#ebebeb',
  barForeground: '#ff3132',
  borderColor: '#000000',
  avatarPlaceholderColor: '#484848',
  logoColor: '#000000',
}
