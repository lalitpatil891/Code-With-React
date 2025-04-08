import React from 'react'

function HookUseCallback({msg}) {

    msg()

  return (
    <div>
      <h1>I'm Child Component</h1>

    </div>
  )
}

export default HookUseCallback
