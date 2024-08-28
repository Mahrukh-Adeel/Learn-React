import {useState} from "react"
function App() {
  const [color,steColor] = useState("blue")
  return (
    <>
      <div className="w-full h-screen durtion-200">
        style={{backgroundColor: color}}
      </div>
    </>
  )
}

export default App
