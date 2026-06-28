import { Rating } from '../rating'
import type { Theme } from '../theme'


export const nord: Theme = {
  backgroundColor: '#2e3440',
  textColor: '#d8dee9',
  textColorSecondary: 'rgba(216, 222, 233, 0.6)',
  badgeColors: {
    [Rating.S]: '#88c0d0',
    [Rating.A]: '#81a1c1',
    [Rating.B]: '#5e81ac',
    [Rating.C]: '#a3be8c',
    [Rating.D]: '#ebcb8b',
    [Rating.E]: '#bf616a',
  },
  badgeTextColors: {
    [Rating.S]: '#2e3440',
    [Rating.A]: '#2e3440',
    [Rating.B]: '#2e3440',
    [Rating.C]: '#2e3440',
    [Rating.D]: '#2e3440',
    [Rating.E]: '#2e3440',
  },
  barBackground: '#3b4252',
  barForeground: '#d8dee9',
  borderColor: '#4c566a',
  avatarPlaceholderColor: '#434c5e',
  logoColor: '#d8dee9',
}
