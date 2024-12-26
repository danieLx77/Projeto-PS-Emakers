import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import TelaLogin from "./routes/TelaLogin/TelaLogin"
import TelaRegistro from "./routes/TelaRegistro/Registro"
import TelaRecuperarConta from "./routes/TelaRecuperarConta/TelaRecuperarConta"
const router = createBrowserRouter([
  {
    path: "/Registrar",
    element: <TelaRegistro />,
  },
  {
    path: "/Login",
    element: <TelaLogin />,
  },
  {
    path: "/RecuperarConta",
    element: <TelaRecuperarConta />,
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
