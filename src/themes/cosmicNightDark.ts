import { Rating } from '../rating'
import type { Theme } from '../theme'


export const cosmicNightDark: Theme = {
  backgroundColor: '#0e0e18',
  textColor: '#e2e2f8',
  textColorSecondary: 'rgba(161, 161, 195, 0.85)',
  badgeColors: {
    [Rating.S]: '#a590ff',
    [Rating.A]: '#7c77fb',
    [Rating.B]: '#5e60ef',
    [Rating.C]: '#6e55cf',
    [Rating.D]: '#5040a8',
    [Rating.E]: '#ff5370',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#23233e',
  barForeground: '#a590ff',
  borderColor: '#313153',
  avatarPlaceholderColor: '#a1a1c3',
  logoColor: '#e2e2f8',
}
