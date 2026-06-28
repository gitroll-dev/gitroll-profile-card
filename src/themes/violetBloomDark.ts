import { Rating } from '../rating'
import type { Theme } from '../theme'


export const violetBloomDark: Theme = {
  backgroundColor: '#110f1e',
  textColor: '#eae5f4',
  textColorSecondary: 'rgba(174, 166, 193, 0.85)',
  badgeColors: {
    [Rating.S]: '#a680ff',
    [Rating.A]: '#e287f7',
    [Rating.B]: '#96b7ff',
    [Rating.C]: '#a76ef8',
    [Rating.D]: '#ff9fe1',
    [Rating.E]: '#f14444',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#000000',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#242232',
  barForeground: '#a680ff',
  borderColor: '#322f46',
  avatarPlaceholderColor: '#aea6c1',
  logoColor: '#eae5f4',
}
