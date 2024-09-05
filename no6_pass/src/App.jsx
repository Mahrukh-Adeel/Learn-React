import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length,setLength]= useState(5);
  const [num, setNum]=useState(false)
  const [char,setChar]=useState(false)
  const [pass,setPass]=useState("")
  const ref = useRef(null)
  const passGen = useCallback(()=>{
    let pas=""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num){
      str +="0123456789"
    }
    if(char) str += "!@#$%^&*()_+=:>?[];./~`"
    for (let index = 1; index <= length; index++) {
      let element = Math.floor(Math.random() * str.length +1);
      pas+= str.charAt(element);
    }
    setPass(pas)
  },[length, num,char, setPass])
  
  const copyPasswordToClipboard = useCallback(() => {
    ref.current?.select();
    ref.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(pass)
  }, [pass])

  useEffect(()=>{
    passGen()
  },[length,num,char,passGen])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 mb-5 pt-3 text-yellow-700 bg-slate-300 pb-4 ">
        <h1 className="text-center my-3 mt-2 text-xl font-bold">Password Generator</h1>
        <div className="flex shadow-lg rounded-lg overflow-hidden my-2">
          <input type="text" value={pass} className="outline-none rounded-lg w-full py-2  px-3" placeholder='Password' ref={ref} readOnly />
          <button className="p-2 bg-yellow-800 text-white rounded-lg outline-none shrink-0" onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className="flex test-sm gap-x-3"> 
          <div className="flex items-center gap-x-1">
            <input type="range" name="range" id="range" min={5} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}} className="cursor-pointer" />
            <label htmlFor="range">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" name="numb" id="numb" defaultChecked={num} onChange={()=>{
              setNum((prev)=> !prev)
            }}/>
            <label htmlFor="numb" className="">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" name="chara" id="chara" defaultChecked={char} onChange={()=>{
              setChar((prev)=> !prev)
            }}/>
            <label htmlFor="chara" className="">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
