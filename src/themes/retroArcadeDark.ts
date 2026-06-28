import { Rating } from '../rating'
import type { Theme } from '../theme'


export const retroArcadeDark: Theme = {
  backgroundColor: '#0e0e27',
  textColor: '#ece4cf',
  textColorSecondary: 'rgba(183, 170, 135, 0.85)',
  badgeColors: {
    [Rating.S]: '#ff4c4d',
    [Rating.A]: '#f1bd00',
    [Rating.B]: '#00c3d1',
    [Rating.C]: '#ad74ff',
    [Rating.D]: '#49d158',
    [Rating.E]: '#fd2a37',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#000000',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#1f213c',
  barForeground: '#ff4c4d',
  borderColor: '#2d2f51',
  avatarPlaceholderColor: '#b7aa87',
  logoColor: '#ece4cf',
}
