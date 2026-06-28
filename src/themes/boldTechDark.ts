import { Rating } from '../rating'
import type { Theme } from '../theme'


export const boldTechDark: Theme = {
  backgroundColor: '#0f182b',
  textColor: '#e1e7fd',
  textColorSecondary: 'rgba(196, 181, 252, 0.85)',
  badgeColors: {
    [Rating.S]: '#a78bfb',
    [Rating.A]: '#8c5df8',
    [Rating.B]: '#7c38ee',
    [Rating.C]: '#6d29d8',
    [Rating.D]: '#5a20b5',
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
  barBackground: '#1f1b4e',
  barForeground: '#8c5df8',
  borderColor: '#2e0c66',
  avatarPlaceholderColor: '#c4b5fc',
  logoColor: '#e1e7fd',
}
