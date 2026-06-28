import { Rating } from '../rating'
import type { Theme } from '../theme'


export const vintagePaperDark: Theme = {
  backgroundColor: '#1d140d',
  textColor: '#e8ddc8',
  textColorSecondary: 'rgba(174, 163, 144, 0.85)',
  badgeColors: {
    [Rating.S]: '#b89061',
    [Rating.A]: '#c6a670',
    [Rating.B]: '#ccbe8a',
    [Rating.C]: '#a17557',
    [Rating.D]: '#b49168',
    [Rating.E]: '#cf413a',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#000000',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#2e241d',
  barForeground: '#b89061',
  borderColor: '#3b3129',
  avatarPlaceholderColor: '#aea390',
  logoColor: '#e8ddc8',
}
