import { Rating } from '../rating'
import type { Theme } from '../theme'


export const quantumRoseDark: Theme = {
  backgroundColor: '#1b0c13',
  textColor: '#eee0e9',
  textColorSecondary: 'rgba(189, 161, 179, 0.85)',
  badgeColors: {
    [Rating.S]: '#fc65b6',
    [Rating.A]: '#e287f7',
    [Rating.B]: '#ff8ea6',
    [Rating.C]: '#df5fc8',
    [Rating.D]: '#d2aeff',
    [Rating.E]: '#fd2a37',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#000000',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#2f1e26',
  barForeground: '#fc65b6',
  borderColor: '#432a36',
  avatarPlaceholderColor: '#bda1b3',
  logoColor: '#eee0e9',
}
