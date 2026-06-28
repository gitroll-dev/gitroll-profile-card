import { Rating } from '../rating'
import type { Theme } from '../theme'


export const dark: Theme = {
  backgroundColor: '#18181B',
  textColor: '#fff',
  textColorSecondary: 'rgba(255, 255, 255, 0.6)',
  badgeColors: {
    [Rating.S]: '#7c3aed',
    [Rating.A]: '#16a34a',
    [Rating.B]: '#65a30d',
    [Rating.C]: '#ca8a04',
    [Rating.D]: '#ea580c',
    [Rating.E]: '#dc2626',
  },
  badgeTextColors: {
    [Rating.S]: '#fff',
    [Rating.A]: '#fff',
    [Rating.B]: '#fff',
    [Rating.C]: '#fff',
    [Rating.D]: '#fff',
    [Rating.E]: '#fff',
  },
  barBackground: '#27272A',
  barForeground: '#fff',
  borderColor: '#27272A',
  avatarPlaceholderColor: '#52525B',
  logoColor: '#fff',
}
