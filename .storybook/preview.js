import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import '../src/scss/main.scss'
import './customStyles.scss' //  This is a temporary fix and should be removed once the button.scss file is deprecated
import '@storybook/addon-console'
import {
  ToggleProvider,
  getEnvironmentName,
  PatternToastContainer,
} from '../src/module'

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  chromatic: { disableSnapshot: true },
}

const LIBRARY_DISTRIBUTION_KEY = '84df6698-1f9e-4091-890c-79b948be7968'

function getEnvForToggle() {
  const environmentName = getEnvironmentName()
  if (environmentName === 'demo' || environmentName === 'stage') {
    return 'staging'
  }
  return environmentName
}

export const decorators = [
  (Story) => (
    <ToggleProvider
      distributionKey={LIBRARY_DISTRIBUTION_KEY}
      environment={getEnvForToggle()}
    >
      <BrowserRouter>
        <Story />
        <PatternToastContainer />
      </BrowserRouter>
    </ToggleProvider>
  ),
]
