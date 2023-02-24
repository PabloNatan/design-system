import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@cn-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/pablonatan.png',
    alt: 'Pablo Natan',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
