import React from 'react'

export default function CardsDetails({type, children}) {
  return (
    
    <div className={type}>{children}</div>
  )
}
