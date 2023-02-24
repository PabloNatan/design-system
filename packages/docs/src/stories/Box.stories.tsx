import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@cn-ui/react'

export default {
  title: 'Form/Box',
  component: Box,

  args: {
    children: (
      <>
        <span>Testando o elemento box</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
