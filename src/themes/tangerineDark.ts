import { Rating } from '../rating'
import type { Theme } from '../theme'


export const tangerineDark: Theme = {
  backgroundColor: '#190f0a',
  textColor: '#eee3d7',
  textColorSecondary: 'rgba(177, 162, 145, 0.85)',
  badgeColors: {
    [Rating.S]: '#f1840b',
    [Rating.A]: '#ff935a',
    [Rating.B]: '#ffbc56',
    [Rating.C]: '#e76444',
    [Rating.D]: '#f19b37',
    [Rating.E]: '#ee3533',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#000000',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#2c211b',
  barForeground: '#f1840b',
  borderColor: '#402e25',
  avatarPlaceholderColor: '#b1a291',
  logoColor: '#eee3d7',
}
