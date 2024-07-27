import React from 'react'
import Dash from './Dash'
import { ThemeProvider } from './ThemeContext'
import Dash2 from './Dash2'
import './App.css'
import Login from './Login'
const App = () => {

  return (
    // <ThemeProvider><div className='d-flex'>  <Dash/>
    // <Dash2 /></div>
    // </ThemeProvider>
    <Login/>
  )
}

export default App
