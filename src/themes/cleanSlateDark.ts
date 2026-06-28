import { Rating } from '../rating'
import type { Theme } from '../theme'


export const cleanSlateDark: Theme = {
  backgroundColor: '#0f182b',
  textColor: '#e4e8ef',
  textColorSecondary: 'rgba(155, 162, 174, 0.85)',
  badgeColors: {
    [Rating.S]: '#818cf9',
    [Rating.A]: '#6468f0',
    [Rating.B]: '#4f46e5',
    [Rating.C]: '#443bc9',
    [Rating.D]: '#3730a5',
    [Rating.E]: '#f14444',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#1d293d',
  barForeground: '#818cf9',
  borderColor: '#4b5666',
  avatarPlaceholderColor: '#9ba2ae',
  logoColor: '#e4e8ef',
}
