import { Rating } from '../rating'
import type { Theme } from '../theme'


export const WatchdogGradient: Theme = {
  backgroundColor: 'linear-gradient(to top left, #520806, #021D4A, #520806)',
  textColor: '#ffffffff',
  textColorSecondary: '#A9FEF7',
  badgeColors: {
    [Rating.S]: '#a78bfa',
    [Rating.A]: '#4ade80',
    [Rating.B]: '#a3e635',
    [Rating.C]: '#fb923c',
    [Rating.D]: '#f87171',
    [Rating.E]: '#6b7280',
  },
  badgeTextColors: {
    [Rating.S]: '#021029ff',
    [Rating.A]: '#021029ff',
    [Rating.B]: '#021029ff',
    [Rating.C]: '#021029ff',
    [Rating.D]: '#021029ff',
    [Rating.E]: '#FF0000',
  },
  barBackground: '#F4F4F5',
  barForeground: '#EB8C30',
  borderColor: '#E4E2E2',
  avatarPlaceholderColor: '#FE428E',
  logoColor: '#EB8C30',
}
