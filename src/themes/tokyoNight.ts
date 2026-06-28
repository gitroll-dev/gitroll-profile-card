import { Rating } from '../rating'
import type { Theme } from '../theme'


export const tokyoNight: Theme = {
  backgroundColor: '#1a1b26',
  textColor: '#c0caf5',
  textColorSecondary: 'rgba(192, 202, 245, 0.6)',
  badgeColors: {
    [Rating.S]: '#7aa2f7',
    [Rating.A]: '#9ece6a',
    [Rating.B]: '#e0af68',
    [Rating.C]: '#f7768e',
    [Rating.D]: '#ff9e64',
    [Rating.E]: '#bb9af7',
  },
  badgeTextColors: {
    [Rating.S]: '#1a1b26',
    [Rating.A]: '#1a1b26',
    [Rating.B]: '#1a1b26',
    [Rating.C]: '#1a1b26',
    [Rating.D]: '#1a1b26',
    [Rating.E]: '#1a1b26',
  },
  barBackground: '#1f2335',
  barForeground: '#c0caf5',
  borderColor: '#3b4261',
  avatarPlaceholderColor: '#565f89',
  logoColor: '#c0caf5',
}
