import { useState } from 'react'
import './App.css'
import Me from "./me.jsx"

function App() {
  const user='me'
  return (
    <>
      <h1>App with vite{user}</h1>//evaluated expression
      <Me/>
    </>
  )
}

export default App
