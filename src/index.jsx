import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navigation from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
    <>
    <Navigation />
    <Main />
    </>

)
