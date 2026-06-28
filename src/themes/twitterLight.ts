import { Rating } from '../rating'
import type { Theme } from '../theme'


export const twitterLight: Theme = {
  backgroundColor: '#ffffff',
  textColor: '#101418',
  textColorSecondary: 'rgba(93, 104, 113, 0.85)',
  badgeColors: {
    [Rating.S]: '#1e9cf0',
    [Rating.A]: '#0086e3',
    [Rating.B]: '#006edc',
    [Rating.C]: '#28acdf',
    [Rating.D]: '#009bbe',
    [Rating.E]: '#f51d31',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#dfe5eb',
  barForeground: '#1e9cf0',
  borderColor: '#e3e9ee',
  avatarPlaceholderColor: '#5d6871',
  logoColor: '#101418',
}
