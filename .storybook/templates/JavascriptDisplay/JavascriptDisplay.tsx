import React from 'react'
import PrismJsCode from '../PrismJsCode'
import './_javascript-display.scss'

type JavascriptDisplayProps = {
  text: string
}

const JavascriptDisplay = ({ text }: JavascriptDisplayProps): JSX.Element => {
  return (
    <div className='storybook-js-style bdrr-4 fs-12'>
      <PrismJsCode code={text} language='javascript' />
    </div>
  )
}

export default JavascriptDisplay
