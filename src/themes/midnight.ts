import { Rating } from '../rating'
import type { Theme } from '../theme'


export const midnight: Theme = {
  backgroundColor: '#1c1e2d',
  textColor: '#d3d7e1',
  textColorSecondary: 'rgba(211, 215, 225, 0.7)',
  badgeColors: {
    [Rating.S]: '#3A506B',
    [Rating.A]: '#4C6A92',
    [Rating.B]: '#5C7A9D',
    [Rating.C]: '#3D4C6D',
    [Rating.D]: '#2B3A4A',
    [Rating.E]: '#1D2A38',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#2c3e50',
  barForeground: '#ecf0f1',
  borderColor: '#34495e',
  avatarPlaceholderColor: '#7f8c8d',
  logoColor: '#ecf0f1',
}
