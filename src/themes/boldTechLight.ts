import { Rating } from '../rating'
import type { Theme } from '../theme'


export const boldTechLight: Theme = {
  backgroundColor: '#ffffff',
  textColor: '#312d84',
  textColorSecondary: 'rgba(124, 56, 238, 0.85)',
  badgeColors: {
    [Rating.S]: '#8c5df8',
    [Rating.A]: '#7c38ee',
    [Rating.B]: '#6d29d8',
    [Rating.C]: '#5a20b5',
    [Rating.D]: '#4c1c96',
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
  barBackground: '#f5f3ff',
  barForeground: '#8c5df8',
  borderColor: '#e1e7fd',
  avatarPlaceholderColor: '#7c38ee',
  logoColor: '#312d84',
}
