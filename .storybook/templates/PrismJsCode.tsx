import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
// import './styles.css'

export default function PrismJsCode({ code, language }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div className='Code'>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}
