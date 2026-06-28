import { Rating } from '../rating'
import type { Theme } from '../theme'


export const modernMinimalLight: Theme = {
  backgroundColor: '#ffffff',
  textColor: '#333333',
  textColorSecondary: 'rgba(108, 114, 126, 0.85)',
  badgeColors: {
    [Rating.S]: '#3981f6',
    [Rating.A]: '#2563ef',
    [Rating.B]: '#1a4eda',
    [Rating.C]: '#1f3fad',
    [Rating.D]: '#193990',
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
  barBackground: '#f5f5f5',
  barForeground: '#3981f6',
  borderColor: '#e4e8ef',
  avatarPlaceholderColor: '#6c727e',
  logoColor: '#333333',
}
