import { Rating } from '../rating'
import type { Theme } from '../theme'


export const kawaiiCat: Theme = {
  backgroundColor: '#F9FFFE',
  textColor: '#7A5C58',
  textColorSecondary: 'rgba(122, 92, 88, 0.65)',
  badgeColors: {
    [Rating.S]: '#FFCAD4',
    [Rating.A]: '#FFD7DE',
    [Rating.B]: '#66B2B2',
    [Rating.C]: '#80BFBF',
    [Rating.D]: '#99CCCC',
    [Rating.E]: '#B3D9D9',
  },
  badgeTextColors: {
    [Rating.S]: '#7A5C58',
    [Rating.A]: '#7A5C58',
    [Rating.B]: '#FFFFFF',
    [Rating.C]: '#FFFFFF',
    [Rating.D]: '#7A5C58',
    [Rating.E]: '#7A5C58',
  },
  barBackground: '#FFCAD4',
  barForeground: '#66B2B2',
  borderColor: '#FFCAD4',
  avatarPlaceholderColor: '#B3D9D9',
  logoColor: '#FFCAD4',
}
