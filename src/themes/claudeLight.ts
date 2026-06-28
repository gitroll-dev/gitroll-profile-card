import { Rating } from '../rating'
import type { Theme } from '../theme'


export const claudeLight: Theme = {
  backgroundColor: '#faf8f1',
  textColor: '#3d3826',
  textColorSecondary: 'rgba(133, 131, 125, 0.85)',
  badgeColors: {
    [Rating.S]: '#b2572f',
    [Rating.A]: '#9c87f6',
    [Rating.B]: '#ded7c2',
    [Rating.C]: '#dad2ef',
    [Rating.D]: '#b25630',
    [Rating.E]: '#141414',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#000000',
    [Rating.C]: '#000000',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#ede8d9',
  barForeground: '#cb6441',
  borderColor: '#d9d8d0',
  avatarPlaceholderColor: '#85837d',
  logoColor: '#3d3826',
}
