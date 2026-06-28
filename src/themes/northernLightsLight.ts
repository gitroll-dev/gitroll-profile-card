import { Rating } from '../rating'
import type { Theme } from '../theme'


export const northernLightsLight: Theme = {
  backgroundColor: '#f2fafd',
  textColor: '#162330',
  textColorSecondary: 'rgba(82, 103, 113, 0.85)',
  badgeColors: {
    [Rating.S]: '#00929d',
    [Rating.A]: '#00a263',
    [Rating.B]: '#937cf1',
    [Rating.C]: '#0072d5',
    [Rating.D]: '#00b8a1',
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
  barBackground: '#ddeff5',
  barForeground: '#00929d',
  borderColor: '#d0e1e7',
  avatarPlaceholderColor: '#526771',
  logoColor: '#162330',
}
