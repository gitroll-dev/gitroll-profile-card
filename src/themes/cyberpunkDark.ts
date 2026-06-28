import { Rating } from '../rating'
import type { Theme } from '../theme'


export const cyberpunkDark: Theme = {
  backgroundColor: '#050517',
  textColor: '#f5eaf7',
  textColorSecondary: 'rgba(187, 149, 196, 0.85)',
  badgeColors: {
    [Rating.S]: '#ff40d3',
    [Rating.A]: '#00dcdf',
    [Rating.B]: '#ffd400',
    [Rating.C]: '#7a6eff',
    [Rating.D]: '#2dd047',
    [Rating.E]: '#fd2a37',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#000000',
    [Rating.B]: '#000000',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#191731',
  barForeground: '#ff40d3',
  borderColor: '#292344',
  avatarPlaceholderColor: '#bb95c4',
  logoColor: '#f5eaf7',
}
