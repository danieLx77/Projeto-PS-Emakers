import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import TelaLogin from "./routes/TelaLogin/TelaLogin"
import TelaRegistro from "./routes/TelaRegistro/Registro"
import TelaRecuperarConta from "./routes/TelaRecuperarConta/TelaRecuperarConta"
import TelaErro from "./routes/TelaErro/TelaErro"
import TelaConta from "./routes/TelaConta/TelaConta"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <TelaErro />,
    children : [
      {
        path: "/",
        element: <TelaLogin />,
      },
      {
        path: "/Registrar",
        element: <TelaRegistro />,
      },
      {
        path: "/RecuperarConta",
        element: <TelaRecuperarConta />,
      },
      {
        path: "/TelaConta",
        element: <TelaConta />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
