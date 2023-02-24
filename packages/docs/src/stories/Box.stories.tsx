import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@cn-ui/react'

export default {
  title: 'Form/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>Testando o elemento box</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
