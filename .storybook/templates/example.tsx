import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DocsTemplate } from './Template'
import TextInput from '../../src/components/Form/TextInput'

export default {
  title: 'Components/Form_Elements/TextInputs',
  component: TextInput,
  parameters: {
    docs: {
      page: () => (
        <DocsTemplate
          description='This is the description!!'
          whenToUse={['bullet 1', 'bullet 2']}
        />
      ),
    },
  },
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
)

export const DefaultStory = Template.bind({})
DefaultStory.args = {
  id: 'text',
  type: 'text',
  labelText: 'Basic Text Input',
  stateName: 'basic_text_state',
  callout: (value) => alert(`callout stateName: ${value}`),
  debounce: 1000,
  value: '',
}

export const NumericTextInput = Template.bind({})
NumericTextInput.args = {
  id: 'number',
  type: 'number',
  labelText: 'Basic Number Input',
  stateName: 'basic_number_state',
  callout: (value) => alert(`callout stateName: ${value}`),
  debounce: 1000,
  value: '',
}

export const EmailInput = Template.bind({})
EmailInput.args = {
  id: 'email',
  type: 'email',
  labelText: 'Email Input',
  stateName: 'email_input_state',
  callout: (value) => alert(`callout stateName: ${value}`),
  debounce: 1000,
  value: '',
}

export const PasswordInput = Template.bind({})
PasswordInput.args = {
  id: 'password',
  type: 'password',
  labelText: 'Password Input',
  stateName: 'password_input_state',
  callout: (value) => alert(`callout stateName: ${value}`),
  debounce: 1000,
  value: '',
}
