import type { Meta, StoryObj } from '@storybook/react'
import { OGCard } from './OGCard'
import { Rating } from './rating'
import { preset } from './theme'


const meta: Meta<typeof OGCard> = {
  component: OGCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    overallRating: {
      control: { type: 'select' },
      options: Object.values(Rating),
    },
  },
}

export default meta
type Story = StoryObj<typeof OGCard>

const baseProps = {
  user: 'JacobLinCool',
  avatar: 'https://github.com/jacoblincool.png',
  devType: 'Exemplary AI/ML Developer',
  overallScore: '9.05',
  overallScoreCDF: '99',
  overallRating: Rating.S,
  reliabilityScore: 4.37,
  securityScore: 5.0,
  maintainabilityScore: 4.86,
  contributor: true,
  regionalRank: [1, 'TW'] as [number, string],
  campusRank: [1, 'ntnu'] as [number, string],
}

export const Light: Story = {
  args: {
    ...baseProps,
    theme: preset.light,
  },
}

export const Dark: Story = {
  args: {
    ...baseProps,
    theme: preset.dark,
  },
}

export const Sepia: Story = {
  args: {
    ...baseProps,
    theme: preset.sepia,
  },
}

export const SolarizedLight: Story = {
  args: {
    ...baseProps,
    theme: preset.solarizedLight,
  },
}

export const SolarizedDark: Story = {
  args: {
    ...baseProps,
    theme: preset.solarizedDark,
  },
}

export const TokyoNight: Story = {
  args: {
    ...baseProps,
    theme: preset.tokyoNight,
  },
}

export const Nord: Story = {
  args: {
    ...baseProps,
    theme: preset.nord,
  },
}

export const Midnight: Story = {
  args:{
    ...baseProps,
    theme: preset.midnight
  }
}

