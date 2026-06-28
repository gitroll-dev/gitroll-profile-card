import { Rating } from '../rating'
import type { Theme } from '../theme'


export const softPopDark: Theme = {
  backgroundColor: '#111524',
  textColor: '#dbe6f2',
  textColorSecondary: 'rgba(146, 167, 189, 0.85)',
  badgeColors: {
    [Rating.S]: '#7f89ff',
    [Rating.A]: '#00d1de',
    [Rating.B]: '#68db70',
    [Rating.C]: '#ffb113',
    [Rating.D]: '#ff76d8',
    [Rating.E]: '#fd2a37',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#000000',
    [Rating.B]: '#000000',
    [Rating.C]: '#000000',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#212635',
  barForeground: '#7f89ff',
  borderColor: '#2d3242',
  avatarPlaceholderColor: '#92a7bd',
  logoColor: '#dbe6f2',
}
