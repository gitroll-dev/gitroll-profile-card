import { Rating } from '../rating'
import type { Theme } from '../theme'


export const bubblegumLight: Theme = {
  backgroundColor: '#f6e6ee',
  textColor: '#5b5b5b',
  textColorSecondary: 'rgba(122, 122, 122, 0.85)',
  badgeColors: {
    [Rating.S]: '#e670ab',
    [Rating.A]: '#84d2e2',
    [Rating.B]: '#fbe2a7',
    [Rating.C]: '#f3a0ca',
    [Rating.D]: '#d7488e',
    [Rating.E]: '#f96f70',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#000000',
    [Rating.B]: '#000000',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#b2e1eb',
  barForeground: '#d04f99',
  borderColor: '#d04f99',
  avatarPlaceholderColor: '#7a7a7a',
  logoColor: '#5b5b5b',
}
