import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-center bg-black h-screen">
      <div className="text-center">
        <h1 className="text-4xl text-blue-500  font-bold mt-4">Sowlyz</h1>
        <div className="mt-6">
          <img src={reactLogo} alt="React Logo" className="w-16 h-16 inline-block" />
          <img src={viteLogo} alt="Vite Logo" className="w-16 h-16 inline-block ml-4" />
        </div>
      </div>
    </div>
  )
}

export default App
