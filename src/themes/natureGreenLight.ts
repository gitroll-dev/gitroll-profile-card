import { Rating } from '../rating'
import type { Theme } from '../theme'


export const natureGreenLight: Theme = {
  backgroundColor: '#f1f7f1',
  textColor: '#1c2b1f',
  textColorSecondary: 'rgba(87, 104, 90, 0.85)',
  badgeColors: {
    [Rating.S]: '#1d7d3e',
    [Rating.A]: '#629742',
    [Rating.B]: '#95a94e',
    [Rating.C]: '#056641',
    [Rating.D]: '#448247',
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
  barBackground: '#e0ece0',
  barForeground: '#1d7d3e',
  borderColor: '#d0dbd0',
  avatarPlaceholderColor: '#57685a',
  logoColor: '#1c2b1f',
}
