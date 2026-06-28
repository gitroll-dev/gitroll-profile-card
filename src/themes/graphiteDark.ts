import { Rating } from '../rating'
import type { Theme } from '../theme'


export const graphiteDark: Theme = {
  backgroundColor: '#1b1b1b',
  textColor: '#e1e1e1',
  textColorSecondary: 'rgba(164, 164, 164, 0.85)',
  badgeColors: {
    [Rating.S]: '#a1a1a1',
    [Rating.A]: '#838383',
    [Rating.B]: '#c1c1c1',
    [Rating.C]: '#696969',
    [Rating.D]: '#505050',
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
  barBackground: '#2b2b2b',
  barForeground: '#a1a1a1',
  borderColor: '#383838',
  avatarPlaceholderColor: '#a4a4a4',
  logoColor: '#e1e1e1',
}
