
import './App.css'
import { Outlet } from "react-router-dom"
import Registro from './routes/TelaRegistro/Registro'
import TelaLogin from './routes/TelaLogin/TelaLogin'
import TelaRecuperarConta from './routes/TelaRecuperarConta/TelaRecuperarConta'

function App() {
  

  return (
    <div className="App">
      <Outlet />
    </div>
  )
}

export default App
