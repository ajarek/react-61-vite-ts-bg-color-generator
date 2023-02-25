import {useRef,useEffect} from 'react'
type Props ={
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = ({value,onChange}:Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div className='wrapper-input'>
      <input
       type="text"
       value={value}
       onChange={onChange}
       ref={inputRef}
         />

    </div>
  )
}

export default Input