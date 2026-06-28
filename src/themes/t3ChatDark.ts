import { Rating } from '../rating'
import type { Theme } from '../theme'


export const t3ChatDark: Theme = {
  backgroundColor: '#190d18',
  textColor: '#ece0ec',
  textColorSecondary: 'rgba(184, 163, 185, 0.85)',
  badgeColors: {
    [Rating.S]: '#d36394',
    [Rating.A]: '#cb7fc5',
    [Rating.B]: '#c3a5f9',
    [Rating.C]: '#e07084',
    [Rating.D]: '#e08bbc',
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
  barBackground: '#2c1f2b',
  barForeground: '#d36394',
  borderColor: '#3f2b3d',
  avatarPlaceholderColor: '#b8a3b9',
  logoColor: '#ece0ec',
}
