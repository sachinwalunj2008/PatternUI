import React, { useState } from 'react'
import { TippyProps } from '@tippyjs/react'
import { Tooltip } from '../../src/module'

interface CopyBoard {
  children: JSX.Element
  text: string
  tooltipPosition?: TippyProps['placement']
}

export const CopyToClipBoard = ({
  children,
  text,
  tooltipPosition = 'top',
}: CopyBoard) => {
  const [isCopied, setCopied] = useState(false)

  return (
    <div
      className='cursor-pointer'
      tabIndex={1}
      onBlur={() => setCopied(false)}
      onClick={() => {
        navigator.clipboard.writeText(text)
        setCopied(true)
      }}
    >
      <Tooltip
        tooltipContent={isCopied ? 'Copied!' : 'Click to copy'}
        position={tooltipPosition}
      >
        {children}
      </Tooltip>
    </div>
  )
}
