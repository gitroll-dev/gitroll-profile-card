import { Rating } from '../rating'
import type { Theme } from '../theme'


export const claudeDark: Theme = {
  backgroundColor: '#262626',
  textColor: '#c3c1ba',
  textColorSecondary: 'rgba(183, 181, 166, 0.85)',
  badgeColors: {
    [Rating.S]: '#b2572f',
    [Rating.A]: '#9c87f6',
    [Rating.B]: '#1a1813',
    [Rating.C]: '#302c48',
    [Rating.D]: '#b25630',
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
  barBackground: '#1b1b1b',
  barForeground: '#d87757',
  borderColor: '#3e3e38',
  avatarPlaceholderColor: '#b7b5a6',
  logoColor: '#c3c1ba',
}
