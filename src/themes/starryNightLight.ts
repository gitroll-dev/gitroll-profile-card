import { Rating } from '../rating'
import type { Theme } from '../theme'


export const starryNightLight: Theme = {
  backgroundColor: '#f0f6fc',
  textColor: '#1a2941',
  textColorSecondary: 'rgba(83, 100, 128, 0.85)',
  badgeColors: {
    [Rating.S]: '#355bbd',
    [Rating.A]: '#0094c9',
    [Rating.B]: '#dab33a',
    [Rating.C]: '#816bd8',
    [Rating.D]: '#00a9b1',
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
  barBackground: '#e2edf8',
  barForeground: '#355bbd',
  borderColor: '#d4dfeb',
  avatarPlaceholderColor: '#536480',
  logoColor: '#1a2941',
}
