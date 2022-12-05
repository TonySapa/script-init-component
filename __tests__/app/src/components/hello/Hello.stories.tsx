import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Hello from './Hello'

export default {
  title: 'Components/Hello',
  component: Hello,
} as ComponentMeta<typeof Hello>

const Template: ComponentStory<typeof Hello> = (args: any) => <Hello {...args} />

export const Primary = Template.bind({})
/* Primary.parameters = {
  backgrounds: { default: 'dark' }
}

Primary.args = {
  label: 'Hello',
  variant: HelloVariants.primary
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Hello',
  variant: HelloVariants.secondary
} */
