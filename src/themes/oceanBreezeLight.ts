import { Rating } from '../rating'
import type { Theme } from '../theme'


export const oceanBreezeLight: Theme = {
  backgroundColor: '#f1fbfb',
  textColor: '#1e313a',
  textColorSecondary: 'rgba(81, 104, 111, 0.85)',
  badgeColors: {
    [Rating.S]: '#009798',
    [Rating.A]: '#00ab95',
    [Rating.B]: '#39b7cb',
    [Rating.C]: '#007daa',
    [Rating.D]: '#55ac89',
    [Rating.E]: '#f14444',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#ddf0f0',
  barForeground: '#009798',
  borderColor: '#d0e2e3',
  avatarPlaceholderColor: '#51686f',
  logoColor: '#1e313a',
}
