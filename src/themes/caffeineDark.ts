import { Rating } from '../rating'
import type { Theme } from '../theme'


export const caffeineDark: Theme = {
  backgroundColor: '#121212',
  textColor: '#eeeeee',
  textColorSecondary: 'rgba(180, 180, 180, 0.85)',
  badgeColors: {
    [Rating.S]: '#fcdfc2',
    [Rating.A]: '#3a3128',
    [Rating.B]: '#2b2b2b',
    [Rating.C]: '#423930',
    [Rating.D]: '#fcdfc2',
    [Rating.E]: '#e55032',
  },
  badgeTextColors: {
    [Rating.S]: '#000000',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#000000',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#222222',
  barForeground: '#fcdfc2',
  borderColor: '#211f1a',
  avatarPlaceholderColor: '#b4b4b4',
  logoColor: '#eeeeee',
}
