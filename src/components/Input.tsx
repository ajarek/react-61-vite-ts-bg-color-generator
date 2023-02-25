import React from 'react'
type Props ={
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = ({value,onChange}:Props) => {
  return (
    <div className='wrapper-input'>
      <input
       type="text"
       value={value}
       onChange={onChange}
         />

    </div>
  )
}

export default Input