import { Rating } from '../rating'
import type { Theme } from '../theme'


export const vintagePaperLight: Theme = {
  backgroundColor: '#f8f1e3',
  textColor: '#3b3129',
  textColorSecondary: 'rgba(112, 96, 82, 0.85)',
  badgeColors: {
    [Rating.S]: '#8e6945',
    [Rating.A]: '#a0814c',
    [Rating.B]: '#a69866',
    [Rating.C]: '#78553c',
    [Rating.D]: '#95734b',
    [Rating.E]: '#c53732',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#efe3cf',
  barForeground: '#8e6945',
  borderColor: '#e2d6c2',
  avatarPlaceholderColor: '#706052',
  logoColor: '#3b3129',
}
