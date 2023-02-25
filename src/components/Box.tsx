import React from 'react'
type Props={
  bg: string
 }
const Box = ({bg}:Props) => {
  return (
    <div className='box' style={{background:bg}}>
      <p>{bg}</p>
      <p> #FF00FF</p>
      </div>
  )
}

export default Box