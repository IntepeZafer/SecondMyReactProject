import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(0)
  return (
    <div className='App'>
      <button onClick={() => {
        setValue(value + 1)
      }}>Kullanıcı Sayısı Arttır</button>
      <div className='Users'>Kullanıcı Sayısı: {value}</div>
    </div>
  )
}

export default App
