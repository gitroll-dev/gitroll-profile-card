import { Rating } from '../rating'
import type { Theme } from '../theme'


export const twitterDark: Theme = {
  backgroundColor: '#000000',
  textColor: '#e3e9ee',
  textColorSecondary: 'rgba(155, 166, 177, 0.85)',
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
  barBackground: '#171b1f',
  barForeground: '#1e9cf0',
  borderColor: '#22272b',
  avatarPlaceholderColor: '#9ba6b1',
  logoColor: '#e3e9ee',
}
