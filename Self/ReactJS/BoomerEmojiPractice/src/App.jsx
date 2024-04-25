import { useState , useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./assets/Navbar"

function App() {
  const [count, setCount] = useState(2)
  // useEffect hook example
  useEffect(()=>{
    alert("Welcome")
  },[])
  
  useEffect(()=>{
    alert("Count changed")
  },[count])
  // useRef hook example
  const a = useRef(0)
  const btnRef = useRef()
  const inputRef = useRef(null)

  useEffect(()=>{
    a.current = a.current + 1 //value persists after every render
    console.log('rendering and the value of a is', a.current)
  })
  function handleInputClick(){
    inputRef.current.focus()
  }
  return (
    <>
      <div>
      <Navbar color={"light"+"green"} 
        count = {count}
      />
        
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnRef} onClick={() => setCount(count*2)}>
          count is {count}
        </button>
        
      </div>
      {/* using useRef for DOM manipulation (selecting count btn) and Hide/unhide it  */}
      <button onClick={()=>{btnRef.current.style.display = "none" ; setCount(count + 1)}}>
          count btn hide
        </button>
      <button onClick={()=>{btnRef.current.style.display = "inline"}}>
          count btn show
        </button>
        <br/>
        {/* using useRef to focus on input field using button (handleInputClick) */}
        <input type='text' ref={inputRef}/>
        <button onClick={handleInputClick}>
          Focus on Input
        </button>
    </>
  )
}

export default App
