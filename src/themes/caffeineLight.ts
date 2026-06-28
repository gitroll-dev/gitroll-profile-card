import { Rating } from '../rating'
import type { Theme } from '../theme'


export const caffeineLight: Theme = {
  backgroundColor: '#f8f8f8',
  textColor: '#1f1f1f',
  textColorSecondary: 'rgba(99, 99, 99, 0.85)',
  badgeColors: {
    [Rating.S]: '#63493f',
    [Rating.A]: '#ffdfb1',
    [Rating.B]: '#e8e8e8',
    [Rating.C]: '#ffe7c7',
    [Rating.D]: '#63493f',
    [Rating.E]: '#e55032',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#000000',
    [Rating.B]: '#000000',
    [Rating.C]: '#000000',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#eeeeee',
  barForeground: '#63493f',
  borderColor: '#d7d7d7',
  avatarPlaceholderColor: '#636363',
  logoColor: '#1f1f1f',
}
