import { Rating } from '../rating'
import type { Theme } from '../theme'


export const modernMinimalDark: Theme = {
  backgroundColor: '#18181d',
  textColor: '#e4e4e4',
  textColorSecondary: 'rgba(161, 161, 168, 0.85)',
  badgeColors: {
    [Rating.S]: '#61a4f7',
    [Rating.A]: '#3981f6',
    [Rating.B]: '#2563ef',
    [Rating.C]: '#1a4eda',
    [Rating.D]: '#1f3fad',
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
  barBackground: '#26262b',
  barForeground: '#3981f6',
  borderColor: '#26262b',
  avatarPlaceholderColor: '#a1a1a8',
  logoColor: '#e4e4e4',
}
