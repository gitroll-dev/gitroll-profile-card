import { Rating } from '../rating'
import type { Theme } from '../theme'


export const pastelDreamsLight: Theme = {
  backgroundColor: '#f9f2ff',
  textColor: '#323041',
  textColorSecondary: 'rgba(114, 106, 131, 0.85)',
  badgeColors: {
    [Rating.S]: '#b48be2',
    [Rating.A]: '#7eabf6',
    [Rating.B]: '#4eccd3',
    [Rating.C]: '#eda4cc',
    [Rating.D]: '#7fc581',
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
  barBackground: '#efe8f5',
  barForeground: '#b48be2',
  borderColor: '#e4d9ed',
  avatarPlaceholderColor: '#726a83',
  logoColor: '#323041',
}
