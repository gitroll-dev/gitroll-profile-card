import { Rating } from '../rating'
import type { Theme } from '../theme'


export const sunsetHorizonDark: Theme = {
  backgroundColor: '#1d0c0c',
  textColor: '#f5e4de',
  textColorSecondary: 'rgba(194, 163, 152, 0.85)',
  badgeColors: {
    [Rating.S]: '#ff6a43',
    [Rating.A]: '#ff7a8c',
    [Rating.B]: '#ffa242',
    [Rating.C]: '#ff71bb',
    [Rating.D]: '#efa800',
    [Rating.E]: '#f22c2d',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#311e1e',
  barForeground: '#ff6a43',
  borderColor: '#452b2a',
  avatarPlaceholderColor: '#c2a398',
  logoColor: '#f5e4de',
}
