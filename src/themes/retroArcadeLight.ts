import { Rating } from '../rating'
import type { Theme } from '../theme'


export const retroArcadeLight: Theme = {
  backgroundColor: '#f7f2e3',
  textColor: '#1d1e39',
  textColorSecondary: 'rgba(93, 96, 128, 0.85)',
  badgeColors: {
    [Rating.S]: '#ee343b',
    [Rating.A]: '#daa600',
    [Rating.B]: '#00adba',
    [Rating.C]: '#955be3',
    [Rating.D]: '#30bd44',
    [Rating.E]: '#ee0b2a',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#ece4cf',
  barForeground: '#ee343b',
  borderColor: '#dfd7c2',
  avatarPlaceholderColor: '#5d6080',
  logoColor: '#1d1e39',
}
