import { Rating } from '../rating'
import type { Theme } from '../theme'


export const solarDuskLight: Theme = {
  backgroundColor: '#fef3e7',
  textColor: '#3e281b',
  textColorSecondary: 'rgba(119, 93, 79, 0.85)',
  badgeColors: {
    [Rating.S]: '#c85d00',
    [Rating.A]: '#de6b4f',
    [Rating.B]: '#d49838',
    [Rating.C]: '#bd413f',
    [Rating.D]: '#c26e12',
    [Rating.E]: '#d73431',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#f1e6da',
  barForeground: '#c85d00',
  borderColor: '#e8d8c6',
  avatarPlaceholderColor: '#775d4f',
  logoColor: '#3e281b',
}
