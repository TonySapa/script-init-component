import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Custom from './Custom'

export default {
  title: 'Components/Custom',
  component: Custom,
} as ComponentMeta<typeof Custom>

const Template: ComponentStory<typeof Custom> = (args: any) => <Custom {...args} />

export const Primary = Template.bind({})
/* Primary.parameters = {
  backgrounds: { default: 'dark' }
}

Primary.args = {
  label: 'Custom',
  variant: CustomVariants.primary
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Custom',
  variant: CustomVariants.secondary
} */
