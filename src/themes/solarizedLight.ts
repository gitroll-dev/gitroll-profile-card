import { Rating } from '../rating'
import type { Theme } from '../theme'


export const solarizedLight: Theme = {
  backgroundColor: '#fdf6e3',
  textColor: '#657b83',
  textColorSecondary: 'rgba(101, 123, 131, 0.6)',
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
    [Rating.C]: '#fdf6e3',
    [Rating.D]: '#fdf6e3',
    [Rating.E]: '#fdf6e3',
  },
  barBackground: '#eee8d5',
  barForeground: '#073642',
  borderColor: '#93a1a1',
  avatarPlaceholderColor: '#93a1a1',
  logoColor: '#657b83',
}
