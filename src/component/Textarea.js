import { useState } from 'react'


export default function Textarea () {
  const [text, setText] = useState('')
 
  const handleUpperCase = () => {
    setText(text.toUpperCase())
  }
  const handleLowerCase = () => {
    setText(text.toLowerCase())
  }
 

  
  return (
    <>
      <div className='container'>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <button className='btn' onClick={handleUpperCase}>
        UpperCase
      </button>
      <button className='btn' onClick={handleLowerCase}>
        LowerCase
      </button>
      
    </>
  )
}