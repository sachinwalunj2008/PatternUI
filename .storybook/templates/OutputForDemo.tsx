import React, { useState } from 'react'
type OutputForDemoProps = {
  output: React.ReactNode
}

const OutputForDemo = ({ output }: OutputForDemoProps): JSX.Element => {
  return (
    <div className='fs-14 mt-8'>
      Output: <i>{output}</i>
    </div>
  )
}

export default OutputForDemo
