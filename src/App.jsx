import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'
import { Rotas } from './routes/Rotas/Rotas'

function App() {

  return (
    <BrowserRouter>
      <Rotas/>
    </BrowserRouter>
  )
}

export default App
