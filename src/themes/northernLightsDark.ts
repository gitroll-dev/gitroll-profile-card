import { Rating } from '../rating'
import type { Theme } from '../theme'


export const northernLightsDark: Theme = {
  backgroundColor: '#040e1a',
  textColor: '#d7e8ee',
  textColorSecondary: 'rgba(137, 171, 182, 0.85)',
  badgeColors: {
    [Rating.S]: '#00bcb4',
    [Rating.A]: '#00c47f',
    [Rating.B]: '#ab93ff',
    [Rating.C]: '#1795fa',
    [Rating.D]: '#0fd4bb',
    [Rating.E]: '#f14444',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#000000',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#14202d',
  barForeground: '#00bcb4',
  borderColor: '#1e2f41',
  avatarPlaceholderColor: '#89abb6',
  logoColor: '#d7e8ee',
}
