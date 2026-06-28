import { Rating } from '../rating'
import type { Theme } from '../theme'


export const darkEmerald: Theme = {
  backgroundColor: 'linear-gradient(to top left, #00bc7d, #1a1a24, #1a1a24)',
  textColor: '#ffffffff',
  textColorSecondary: '#22c55e',
  badgeColors: {
    [Rating.S]: '#a78bfa',
    [Rating.A]: '#4ade80',
    [Rating.B]: '#a3e635',
    [Rating.C]: '#fb923c',
    [Rating.D]: '#f87171',
    [Rating.E]: '#6b7280',
  },
  badgeTextColors: {
    [Rating.S]: '#0a0a0a',
    [Rating.A]: '#0a0a0a',
    [Rating.B]: '#0a0a0a',
    [Rating.C]: '#0a0a0a',
    [Rating.D]: '#0a0a0a',
    [Rating.E]: '#fff',
  },
  barBackground: '#F4F4F5',
  barForeground: '#00bc7d',
  borderColor: '#1cab90',
  avatarPlaceholderColor: '#9ca3af',
  logoColor: '#00bc7d',
}
