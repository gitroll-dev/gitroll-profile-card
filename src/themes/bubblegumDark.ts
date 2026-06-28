import { Rating } from '../rating'
import type { Theme } from '../theme'


export const bubblegumDark: Theme = {
  backgroundColor: '#12242e',
  textColor: '#f3e3ea',
  textColorSecondary: 'rgba(228, 162, 177, 0.85)',
  badgeColors: {
    [Rating.S]: '#50afb6',
    [Rating.A]: '#e4a2b1',
    [Rating.B]: '#c77b96',
    [Rating.C]: '#175c6c',
    [Rating.D]: '#23272b',
    [Rating.E]: '#e35ea4',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#23272b',
  barForeground: '#fbe2a7',
  borderColor: '#324859',
  avatarPlaceholderColor: '#e4a2b1',
  logoColor: '#f3e3ea',
}
