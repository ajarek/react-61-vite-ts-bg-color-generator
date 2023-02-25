import React, { ReactEventHandler } from 'react'
 type Props={
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
 }

const Button = ({onClick}:Props) => {
  return (
    <div className='wrapper-button'>
      <button onClick={onClick}>Toggle Text Color</button>
    </div>
  )
}

export default Button