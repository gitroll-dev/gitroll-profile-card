import { Rating } from '../rating'
import type { Theme } from '../theme'


export const softPopLight: Theme = {
  backgroundColor: '#f4f9ff',
  textColor: '#21283d',
  textColorSecondary: 'rgba(90, 99, 123, 0.85)',
  badgeColors: {
    [Rating.S]: '#6468f0',
    [Rating.A]: '#00bdca',
    [Rating.B]: '#57cb60',
    [Rating.C]: '#f5a400',
    [Rating.D]: '#eb63c5',
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
  barBackground: '#e2edf8',
  barForeground: '#6468f0',
  borderColor: '#d4dfeb',
  avatarPlaceholderColor: '#5a637b',
  logoColor: '#21283d',
}
