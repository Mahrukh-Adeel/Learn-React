import { useState } from 'react'
import Card from "./components/card"
function App() {
  let obj={
    user:"me",
    pass:"123"
  }
  let arr=[1,2,3]
  return (
    <>
      <h1 className=" text-center bg-green-200 text-blue-200 p-4 rounded-lg">Tailwind Test</h1>
      <Card user='me' btn="button"/>
    </>
  )
}

export default App
