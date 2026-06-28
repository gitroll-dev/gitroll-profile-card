import { Rating } from '../rating'
import type { Theme } from '../theme'


export const doom64Dark: Theme = {
  backgroundColor: '#0b0b0b',
  textColor: '#cecece',
  textColorSecondary: 'rgba(143, 143, 143, 0.85)',
  badgeColors: {
    [Rating.S]: '#ea2126',
    [Rating.A]: '#ae7300',
    [Rating.B]: '#627b48',
    [Rating.C]: '#008cba',
    [Rating.D]: '#8254c4',
    [Rating.E]: '#bb061e',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#222222',
  barForeground: '#ea2126',
  borderColor: '#2e2e2e',
  avatarPlaceholderColor: '#8f8f8f',
  logoColor: '#cecece',
}
