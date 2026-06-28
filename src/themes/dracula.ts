import { Rating } from '../rating'
import type { Theme } from '../theme'


export const dracula: Theme = {
  backgroundColor: '#282A36',
  textColor: '#F8F8F2',
  textColorSecondary: '#6272A4',
  badgeColors: {
    [Rating.S]: '#BD93F9',
    [Rating.A]: '#50FA7B',
    [Rating.B]: '#F1FA8C',
    [Rating.C]: '#FFB86C',
    [Rating.D]: '#FF79C6',
    [Rating.E]: '#FF5555',
  },
  badgeTextColors: {
    [Rating.S]: '#282A36',
    [Rating.A]: '#282A36',
    [Rating.B]: '#282A36',
    [Rating.C]: '#282A36',
    [Rating.D]: '#282A36',
    [Rating.E]: '#282A36',
  },
  barBackground: '#44475A',
  barForeground: '#8BE9FD',
  borderColor: '#44475A',
  avatarPlaceholderColor: '#6272A4',
  logoColor: '#F8F8F2',
}
