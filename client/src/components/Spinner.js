import React from 'react'
import '../ATB3o.gif'

export default function Spinner(){
  
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          {/* <span className="sr-only">Loading...</span> */}
          <img src="ATB3o.gif" alt="" />
        </div>
      </div>
    )
  }
