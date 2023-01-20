import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const err= useRouteError()
    console.log(err)

  return (
    <div>
        <h1>Oops!!</h1><h2>Error.</h2>
        <h1>
            {err.status+":"+err.statusText}
        </h1>
    </div>
  )
}

export default Error