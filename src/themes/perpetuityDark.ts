import { Rating } from '../rating'
import type { Theme } from '../theme'


export const perpetuityDark: Theme = {
  backgroundColor: '#031011',
  textColor: '#d0e2e2',
  textColorSecondary: 'rgba(144, 171, 171, 0.85)',
  badgeColors: {
    [Rating.S]: '#39abac',
    [Rating.A]: '#52b9a7',
    [Rating.B]: '#6cc7d7',
    [Rating.C]: '#2e918c',
    [Rating.D]: '#40b1b7',
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
  barBackground: '#142223',
  barForeground: '#39abac',
  borderColor: '#223132',
  avatarPlaceholderColor: '#90abab',
  logoColor: '#d0e2e2',
}
