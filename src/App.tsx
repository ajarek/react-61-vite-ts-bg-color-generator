import Box from './components/Box'
import Input from './components/Input'
import Button from './components/Button'
import { useState } from 'react'

function App() {
  const [background,setBackground]=useState('red')

  return (
    <div className="App">
    
   <Box
   bg={background}
   />
    <Input 
    value={background}
    onChange={(e) => setBackground(e.target.value)}
    />
    <Button/>
    </div>
  )
}

export default App
