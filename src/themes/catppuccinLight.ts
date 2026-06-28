import { Rating } from '../rating'
import type { Theme } from '../theme'


export const catppuccinLight: Theme = {
  backgroundColor: '#eef2f9',
  textColor: '#4e5069',
  textColorSecondary: 'rgba(109, 112, 131, 0.85)',
  badgeColors: {
    [Rating.S]: '#8737ed',
    [Rating.A]: '#19a4e2',
    [Rating.B]: '#40a22a',
    [Rating.C]: '#fc6514',
    [Rating.D]: '#d88a79',
    [Rating.E]: '#d30237',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#dee1e8',
  barForeground: '#8737ed',
  borderColor: '#bcc1ce',
  avatarPlaceholderColor: '#6d7083',
  logoColor: '#4e5069',
}
