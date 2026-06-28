import { Rating } from '../rating'
import type { Theme } from '../theme'


export const elegantLuxuryDark: Theme = {
  backgroundColor: '#110c09',
  textColor: '#f1e6da',
  textColorSecondary: 'rgba(171, 156, 139, 0.85)',
  badgeColors: {
    [Rating.S]: '#dd503f',
    [Rating.A]: '#cd9130',
    [Rating.B]: '#d0b56a',
    [Rating.C]: '#944b40',
    [Rating.D]: '#bb6546',
    [Rating.E]: '#d73431',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#271d17',
  barForeground: '#dd503f',
  borderColor: '#362b25',
  avatarPlaceholderColor: '#ab9c8b',
  logoColor: '#f1e6da',
}
