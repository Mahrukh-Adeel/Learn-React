import {useState} from "react"
function App() {
  const [color,setColor] = useState("blue")
  return (
    <>
      <div className="w-full h-screen durtion-200"
        style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white p-5">
            <button onClick={()=>setColor("red")} className=" px-3 py-1 outline-none rounded-xl"
            style={{
              backgroundColor: "red",
              color:"white"
            }}
            >Red</button>
            <button onClick={()=>setColor("green")} className=" px-3 py-1 outline-none rounded-xl"
            style={{
              backgroundColor: "green",
              color:"white"
            }}
            >green</button>
            <button onClick={()=>setColor("white")} className=" px-3 py-1 outline-none border-zinc-100 border-[1px] rounded-xl"
            style={{
              backgroundColor: "white",
              color:"black"
            }}
            >white</button>
            <button onClick={()=>setColor("blue")} className=" px-3 py-1 outline-none rounded-xl"
            style={{
              backgroundColor: "blue",
              color:"white"
            }}
            >blue</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
