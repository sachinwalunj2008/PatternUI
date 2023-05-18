import React from 'react'

type Props = {
  /** use string px value (ex: '300px') */
  height: string
  children: React.ReactNode
}
const ForDisplayUseOnly = ({ height, children }: Props) => (
  <div style={{ height }}>{children}</div>
)
export default ForDisplayUseOnly
