import { Rating } from '../rating'
import type { Theme } from '../theme'


export const tangerineLight: Theme = {
  backgroundColor: '#faf4ee',
  textColor: '#3a2a20',
  textColorSecondary: 'rgba(113, 95, 83, 0.85)',
  badgeColors: {
    [Rating.S]: '#d56b00',
    [Rating.A]: '#ed7940',
    [Rating.B]: '#e4a339',
    [Rating.C]: '#cb4a2a',
    [Rating.D]: '#d6810c',
    [Rating.E]: '#e62c2c',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#f4e9dd',
  barForeground: '#d56b00',
  borderColor: '#e7dcd0',
  avatarPlaceholderColor: '#715f53',
  logoColor: '#3a2a20',
}
