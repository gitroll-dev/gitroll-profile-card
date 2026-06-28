import { Rating } from '../rating'
import type { Theme } from '../theme'


export const violetBloomLight: Theme = {
  backgroundColor: '#f9f7fe',
  textColor: '#2d2a41',
  textColorSecondary: 'rgba(104, 101, 127, 0.85)',
  badgeColors: {
    [Rating.S]: '#8d5df8',
    [Rating.A]: '#c168d5',
    [Rating.B]: '#7896ff',
    [Rating.C]: '#894ed6',
    [Rating.D]: '#de80c0',
    [Rating.E]: '#f14444',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#f0ecfa',
  barForeground: '#8d5df8',
  borderColor: '#e3dfed',
  avatarPlaceholderColor: '#68657f',
  logoColor: '#2d2a41',
}
