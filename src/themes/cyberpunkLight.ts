import { Rating } from '../rating'
import type { Theme } from '../theme'


export const cyberpunkLight: Theme = {
  backgroundColor: '#fcf6fd',
  textColor: '#150718',
  textColorSecondary: 'rgba(112, 90, 117, 0.85)',
  badgeColors: {
    [Rating.S]: '#fe00c7',
    [Rating.A]: '#00c4c8',
    [Rating.B]: '#f7ca00',
    [Rating.C]: '#6d5cff',
    [Rating.D]: '#01bf35',
    [Rating.E]: '#fd2a37',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#000000',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#f5eaf7',
  barForeground: '#fe00c7',
  borderColor: '#e9d8e9',
  avatarPlaceholderColor: '#705a75',
  logoColor: '#150718',
}
