import { Rating } from './rating'


export interface Theme {
  backgroundColor: string
  textColor: string
  textColorSecondary: string
  badgeColors: Record<Rating, string>
  badgeTextColors: Record<Rating, string>
  barBackground: string
  barForeground: string
  borderColor: string
  avatarPlaceholderColor: string
  logoColor: string
}

const light = {
  backgroundColor: '#fff',
  textColor: '#000',
  textColorSecondary: 'rgba(0, 0, 0, 0.6)',
  badgeColors: {
    [Rating.S]: '#c4b5fd',
    [Rating.A]: '#bbf7d0',
    [Rating.B]: '#d9f99d',
    [Rating.C]: '#fef08a',
    [Rating.D]: '#fed7aa',
    [Rating.E]: '#fecaca'
  },
  badgeTextColors: {
    [Rating.S]: '#000',
    [Rating.A]: '#000',
    [Rating.B]: '#000',
    [Rating.C]: '#000',
    [Rating.D]: '#000',
    [Rating.E]: '#000'
  },
  barBackground: '#F4F4F5',
  barForeground: '#18181B',
  borderColor: '#E4E4E7',
  avatarPlaceholderColor: '#9ca3af',
  logoColor: '#030303',
}

const dark = {
  backgroundColor: '#18181B',
  textColor: '#fff',
  textColorSecondary: 'rgba(255, 255, 255, 0.6)',
  badgeColors: {
    [Rating.S]: '#7c3aed',
    [Rating.A]: '#16a34a',
    [Rating.B]: '#65a30d',
    [Rating.C]: '#ca8a04',
    [Rating.D]: '#ea580c',
    [Rating.E]: '#dc2626'
  },
  badgeTextColors: {
    [Rating.S]: '#fff',
    [Rating.A]: '#fff',
    [Rating.B]: '#fff',
    [Rating.C]: '#fff',
    [Rating.D]: '#fff',
    [Rating.E]: '#fff'
  },
  barBackground: '#27272A',
  barForeground: '#fff',
  borderColor: '#27272A',
  avatarPlaceholderColor: '#52525B',
  logoColor: '#fff',
}

const sepia = {
  backgroundColor: '#f4ecd8',
  textColor: '#5b4636',
  textColorSecondary: 'rgba(91, 70, 54, 0.6)',
  badgeColors: {
    [Rating.S]: '#d2b48c',
    [Rating.A]: '#f0e68c',
    [Rating.B]: '#eedd82',
    [Rating.C]: '#ffd700',
    [Rating.D]: '#daa520',
    [Rating.E]: '#cd853f'
  },
  badgeTextColors: {
    [Rating.S]: '#5b4636',
    [Rating.A]: '#5b4636',
    [Rating.B]: '#5b4636',
    [Rating.C]: '#5b4636',
    [Rating.D]: '#5b4636',
    [Rating.E]: '#5b4636'
  },
  barBackground: '#e8dcc2',
  barForeground: '#5b4636',
  borderColor: '#c2b280',
  avatarPlaceholderColor: '#b4a078',
  logoColor: '#5b4636',
}

const solarizedLight = {
  backgroundColor: '#fdf6e3',
  textColor: '#657b83',
  textColorSecondary: 'rgba(101, 123, 131, 0.6)',
  badgeColors: {
    [Rating.S]: '#b58900',
    [Rating.A]: '#859900',
    [Rating.B]: '#2aa198',
    [Rating.C]: '#268bd2',
    [Rating.D]: '#d33682',
    [Rating.E]: '#dc322f'
  },
  badgeTextColors: {
    [Rating.S]: '#002b36',
    [Rating.A]: '#002b36',
    [Rating.B]: '#002b36',
    [Rating.C]: '#fdf6e3',
    [Rating.D]: '#fdf6e3',
    [Rating.E]: '#fdf6e3'
  },
  barBackground: '#eee8d5',
  barForeground: '#073642',
  borderColor: '#93a1a1',
  avatarPlaceholderColor: '#93a1a1',
  logoColor: '#657b83',
}

const solarizedDark = {
  backgroundColor: '#002b36',
  textColor: '#839496',
  textColorSecondary: 'rgba(131, 148, 150, 0.6)',
  badgeColors: {
    [Rating.S]: '#b58900',
    [Rating.A]: '#859900',
    [Rating.B]: '#2aa198',
    [Rating.C]: '#268bd2',
    [Rating.D]: '#d33682',
    [Rating.E]: '#dc322f'
  },
  badgeTextColors: {
    [Rating.S]: '#002b36',
    [Rating.A]: '#002b36',
    [Rating.B]: '#002b36',
    [Rating.C]: '#002b36',
    [Rating.D]: '#002b36',
    [Rating.E]: '#002b36'
  },
  barBackground: '#073642',
  barForeground: '#fdf6e3',
  borderColor: '#586e75',
  avatarPlaceholderColor: '#586e75',
  logoColor: '#839496',
}

const tokyoNight = {
  backgroundColor: '#1a1b26',
  textColor: '#c0caf5',
  textColorSecondary: 'rgba(192, 202, 245, 0.6)',
  badgeColors: {
    [Rating.S]: '#7aa2f7',
    [Rating.A]: '#9ece6a',
    [Rating.B]: '#e0af68',
    [Rating.C]: '#f7768e',
    [Rating.D]: '#ff9e64',
    [Rating.E]: '#bb9af7'
  },
  badgeTextColors: {
    [Rating.S]: '#1a1b26',
    [Rating.A]: '#1a1b26',
    [Rating.B]: '#1a1b26',
    [Rating.C]: '#1a1b26',
    [Rating.D]: '#1a1b26',
    [Rating.E]: '#1a1b26'
  },
  barBackground: '#1f2335',
  barForeground: '#c0caf5',
  borderColor: '#3b4261',
  avatarPlaceholderColor: '#565f89',
  logoColor: '#c0caf5',
}

const nord = {
  backgroundColor: '#2e3440',
  textColor: '#d8dee9',
  textColorSecondary: 'rgba(216, 222, 233, 0.6)',
  badgeColors: {
    [Rating.S]: '#88c0d0',
    [Rating.A]: '#81a1c1',
    [Rating.B]: '#5e81ac',
    [Rating.C]: '#a3be8c',
    [Rating.D]: '#ebcb8b',
    [Rating.E]: '#bf616a'
  },
  badgeTextColors: {
    [Rating.S]: '#2e3440',
    [Rating.A]: '#2e3440',
    [Rating.B]: '#2e3440',
    [Rating.C]: '#2e3440',
    [Rating.D]: '#2e3440',
    [Rating.E]: '#2e3440'
  },
  barBackground: '#3b4252',
  barForeground: '#d8dee9',
  borderColor: '#4c566a',
  avatarPlaceholderColor: '#434c5e',
  logoColor: '#d8dee9',
}

const midnight = {
  backgroundColor: '#1c1e2d', 
  textColor: '#d3d7e1', 
  textColorSecondary: 'rgba(211, 215, 225, 0.7)', 
  badgeColors: {
    [Rating.S]: '#3A506B',
    [Rating.A]: '#4C6A92',
    [Rating.B]: '#5C7A9D',
    [Rating.C]: '#3D4C6D',
    [Rating.D]: '#2B3A4A',
    [Rating.E]: '#1D2A38' 
  },
  badgeTextColors: {
    [Rating.S]: '#ffffff',
    [Rating.A]: '#ffffff',
    [Rating.B]: '#ffffff',
    [Rating.C]: '#ffffff',
    [Rating.D]: '#ffffff',
    [Rating.E]: '#ffffff' 
  },
  barBackground: '#2c3e50',
  barForeground: '#ecf0f1',
  borderColor: '#34495e',
  avatarPlaceholderColor: '#7f8c8d',
  logoColor: '#ecf0f1'
}

export const preset: Record<string, Theme> = {
  light,
  dark,
  sepia,
  solarizedLight,
  solarizedDark,
  tokyoNight,
  nord
  midnight,
}
