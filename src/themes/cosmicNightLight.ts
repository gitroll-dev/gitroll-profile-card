import { Rating } from '../rating'
import type { Theme } from '../theme'


export const cosmicNightLight: Theme = {
  backgroundColor: '#f4f4fc',
  textColor: '#2a294b',
  textColorSecondary: 'rgba(107, 107, 139, 0.85)',
  badgeColors: {
    [Rating.S]: '#6e55cf',
    [Rating.A]: '#9d8bfa',
    [Rating.B]: '#5e60ef',
    [Rating.C]: '#7c77fb',
    [Rating.D]: '#5040a8',
    [Rating.E]: '#ff5370',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#f1f1f8',
  barForeground: '#6e55cf',
  borderColor: '#e0e0ee',
  avatarPlaceholderColor: '#6b6b8b',
  logoColor: '#2a294b',
}
