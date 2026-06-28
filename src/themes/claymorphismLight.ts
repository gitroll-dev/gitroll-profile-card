import { Rating } from '../rating'
import type { Theme } from '../theme'


export const claymorphismLight: Theme = {
  backgroundColor: '#e4e4e4',
  textColor: '#1d293d',
  textColorSecondary: 'rgba(108, 114, 126, 0.85)',
  badgeColors: {
    [Rating.S]: '#6468f0',
    [Rating.A]: '#4f46e5',
    [Rating.B]: '#443bc9',
    [Rating.C]: '#3730a5',
    [Rating.D]: '#312d84',
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
  barBackground: '#e4e4e4',
  barForeground: '#6468f0',
  borderColor: '#d4d4d4',
  avatarPlaceholderColor: '#6c727e',
  logoColor: '#1d293d',
}
