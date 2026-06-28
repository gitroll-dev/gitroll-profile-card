import { Rating } from '../rating'
import type { Theme } from '../theme'


export const solarDuskDark: Theme = {
  backgroundColor: '#1c0d06',
  textColor: '#eee3d7',
  textColorSecondary: 'rgba(181, 161, 138, 0.85)',
  badgeColors: {
    [Rating.S]: '#eb7c33',
    [Rating.A]: '#fa8467',
    [Rating.B]: '#eeb154',
    [Rating.C]: '#dc5e59',
    [Rating.D]: '#dd8736',
    [Rating.E]: '#de3c37',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#000000',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#302017',
  barForeground: '#eb7c33',
  borderColor: '#402e25',
  avatarPlaceholderColor: '#b5a18a',
  logoColor: '#eee3d7',
}
