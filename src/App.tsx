import Box from './components/Box'
import Input from './components/Input'
import Button from './components/Button'
import { useState } from 'react'
import convertCssColorNameToHex from 'convert-css-color-name-to-hex'

function App() {
  const [background, setBackground] = useState('red')
  const [toggleColor, setToggleColor] = useState(false)
  const hex = convertCssColorNameToHex(background)
  return (
    <div className='App'>
      <Box
        bg={background}
        hex={hex}
        color={toggleColor ? '#ffffff' : '#000000'}
      />
      <Input
        value={background}
        onChange={(e) => setBackground(e.target.value)}
      />
      <Button onClick={() => setToggleColor(!toggleColor)} />
    </div>
  )
}

export default App
