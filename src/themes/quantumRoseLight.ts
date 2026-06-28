import { Rating } from '../rating'
import type { Theme } from '../theme'


export const quantumRoseLight: Theme = {
  backgroundColor: '#fdf6fb',
  textColor: '#3d2531',
  textColorSecondary: 'rgba(117, 90, 102, 0.85)',
  badgeColors: {
    [Rating.S]: '#d84497',
    [Rating.A]: '#c168d5',
    [Rating.B]: '#ef6e88',
    [Rating.C]: '#bd3da8',
    [Rating.D]: '#b28fef',
    [Rating.E]: '#fd2a37',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#f5e6ef',
  barForeground: '#d84497',
  borderColor: '#edd7e4',
  avatarPlaceholderColor: '#755a66',
  logoColor: '#3d2531',
}
