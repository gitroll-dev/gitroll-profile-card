import { Rating } from '../rating'
import type { Theme } from '../theme'


export const retro: Theme = {
  backgroundColor: '#240046',
  textColor: '#f2ebfb',
  textColorSecondary: 'rgba(255, 255, 255, 0.6)',
  badgeColors: {
    [Rating.S]: '#fbe300',
    [Rating.A]: '#9cf945',
    [Rating.B]: '#4cc9f0',
    [Rating.C]: '#9d4edd',
    [Rating.D]: '#f72585',
    [Rating.E]: '#ff6200',
  },
  badgeTextColors: {
    [Rating.S]: '#240046',
    [Rating.A]: '#240046',
    [Rating.B]: '#240046',
    [Rating.C]: '#240046',
    [Rating.D]: '#240046',
    [Rating.E]: '#240046',
  },
  barBackground: '#F4F4F5',
  barForeground: '#9d4edd',
  borderColor: '#E4E4E7',
  avatarPlaceholderColor: '#9ca3af',
  logoColor: '#ebd9fc',
}
