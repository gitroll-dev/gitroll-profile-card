import { Rating } from '../rating'
import type { Theme } from '../theme'


export const t3ChatLight: Theme = {
  backgroundColor: '#fcf6fc',
  textColor: '#41293f',
  textColorSecondary: 'rgba(122, 95, 119, 0.85)',
  badgeColors: {
    [Rating.S]: '#a74370',
    [Rating.A]: '#ab61a5',
    [Rating.B]: '#a486d7',
    [Rating.C]: '#bd5167',
    [Rating.D]: '#bf6d9d',
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
  barBackground: '#f2e7f3',
  barForeground: '#a74370',
  borderColor: '#e9d8e9',
  avatarPlaceholderColor: '#7a5f77',
  logoColor: '#41293f',
}
