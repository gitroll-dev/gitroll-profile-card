import { Rating } from '../rating'
import type { Theme } from '../theme'


export const natureGreenDark: Theme = {
  backgroundColor: '#0b140d',
  textColor: '#d6e2d6',
  textColorSecondary: 'rgba(147, 164, 147, 0.85)',
  badgeColors: {
    [Rating.S]: '#40a35c',
    [Rating.A]: '#80b761',
    [Rating.B]: '#adc367',
    [Rating.C]: '#25855b',
    [Rating.D]: '#549957',
    [Rating.E]: '#de3c37',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#1b241d',
  barForeground: '#40a35c',
  borderColor: '#273129',
  avatarPlaceholderColor: '#93a493',
  logoColor: '#d6e2d6',
}
