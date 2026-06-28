import { Rating } from '../rating'
import type { Theme } from '../theme'


export const starryNightDark: Theme = {
  backgroundColor: '#030b1c',
  textColor: '#dbe6f2',
  textColorSecondary: 'rgba(141, 168, 195, 0.85)',
  badgeColors: {
    [Rating.S]: '#618df3',
    [Rating.A]: '#16b3eb',
    [Rating.B]: '#f5cc58',
    [Rating.C]: '#9e8afa',
    [Rating.D]: '#00c3cb',
    [Rating.E]: '#f14444',
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#000000',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff',
  },
  barBackground: '#121d30',
  barForeground: '#618df3',
  borderColor: '#1f2e47',
  avatarPlaceholderColor: '#8da8c3',
  logoColor: '#dbe6f2',
}
