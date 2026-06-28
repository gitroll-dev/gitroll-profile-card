import { Rating } from '../rating'
import type { Theme } from '../theme'


export const mochaMousseDark: Theme = {
  backgroundColor: '#1a1512',
  textColor: '#e8dcd1',
  textColorSecondary: 'rgba(173, 154, 140, 0.85)',
  badgeColors: {
    [Rating.S]: '#bc8c71',
    [Rating.A]: '#c69b78',
    [Rating.B]: '#ceb38d',
    [Rating.C]: '#906657',
    [Rating.D]: '#a3745a',
    [Rating.E]: '#d74840',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#2f241e',
  barForeground: '#bc8c71',
  borderColor: '#3c302a',
  avatarPlaceholderColor: '#ad9a8c',
  logoColor: '#e8dcd1',
}
