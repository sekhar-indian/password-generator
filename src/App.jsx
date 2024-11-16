import { useState,useCallback ,useEffect} from 'react';
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [carAllowed,setCarAllowed]=useState(false)
  const [password,setPassword]=useState('')

  const generatePassword=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(carAllowed) str+="@!#$%^&*()_+"
    for(let i=1;i<length;i++){
     const char=Math.floor( Math.random()*str.length+1)
     pass+=str.charAt(char)
    }

    setPassword(pass)
  },[numberAllowed,length,carAllowed])

  useEffect(()=>{
    generatePassword();
  },[numberAllowed,carAllowed,length])

  return (
    <div className='password-g-container'>
      <h1 className='text-color'>Passored Generator</h1>
      <div>
        <input type="text" className='input-bar' value={password} placeholder='Password' readOnly></input>
        <button className='blue-button text-color'>Copy</button>
      </div>

      <div>
        <input className='range-class' type='range' min={6} max={100} valuse={length} name="" id='range' onChange={(e)=>setLength (Number(e.target.value))}>
        </input>
        <label htmFor='range' className='text-color'>Length:{length}</label>

        <input type='checkbox' id='checkbox' onChange={()=>setNumberAllowed((pev)=>!pev) }></input>
        <label className='text-color' htmFor='checkbox'>Number</label>
        <input type='checkbox' id='number' onChange={()=>setCarAllowed((pev)=>!pev) }></input>
        <label className='text-color' htmFor='number'>Charr</label>  
      </div>
    </div>
  )
}

export default App
