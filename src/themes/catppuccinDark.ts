import { Rating } from '../rating'
import type { Theme } from '../theme'


export const catppuccinDark: Theme = {
  backgroundColor: '#191928',
  textColor: '#ced7f3',
  textColorSecondary: 'rgba(166, 173, 200, 0.85)',
  badgeColors: {
    [Rating.S]: '#cca7f9',
    [Rating.A]: '#8dddeb',
    [Rating.B]: '#a6e4a1',
    [Rating.C]: '#f8b287',
    [Rating.D]: '#f2e0dd',
    [Rating.E]: '#f58ca9',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#000000',
    [Rating.B]: '#000000',
    [Rating.C]: '#000000',
    [Rating.D]: '#000000',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#2a2d3d',
  barForeground: '#cca7f9',
  borderColor: '#303142',
  avatarPlaceholderColor: '#a6adc8',
  logoColor: '#ced7f3',
}
