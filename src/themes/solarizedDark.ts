import { Rating } from '../rating'
import type { Theme } from '../theme'


export const solarizedDark: Theme = {
  backgroundColor: '#002b36',
  textColor: '#839496',
  textColorSecondary: 'rgba(131, 148, 150, 0.6)',
  badgeColors: {
    [Rating.S]: '#b58900',
    [Rating.A]: '#859900',
    [Rating.B]: '#2aa198',
    [Rating.C]: '#268bd2',
    [Rating.D]: '#d33682',
    [Rating.E]: '#dc322f',
  },
  badgeTextColors: {
    [Rating.S]: '#002b36',
    [Rating.A]: '#002b36',
    [Rating.B]: '#002b36',
    [Rating.C]: '#002b36',
    [Rating.D]: '#002b36',
    [Rating.E]: '#002b36',
  },
  barBackground: '#073642',
  barForeground: '#fdf6e3',
  borderColor: '#586e75',
  avatarPlaceholderColor: '#586e75',
  logoColor: '#839496',
}
