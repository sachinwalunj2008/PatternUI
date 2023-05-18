import { useState } from 'react'

export const useDemoInput = (
  callout: (...args: any) => string | number | boolean
) => {
  const [state, setState] = useState<{
      value: string | number
      output: string | number | boolean
    }>({
      value: '',
      output: '',
    }),
    { value, output } = state

  const updateInput = (...args: any) => {
    setState({
      value,
      output: callout(...args),
    })
  }

  return { value, output, onChange: updateInput }
}
