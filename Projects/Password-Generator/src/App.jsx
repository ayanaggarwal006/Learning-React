import { useState ,useCallback, useEffect} from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(0)
  const [number,setNumber] = useState(false)
  const [special,setSpecial] = useState(false)
  const [password,setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

    if(number) str += "1234567890"
    if (special) str+= "!@#$%^&*()~?><';}{]["
    
    for(let i=0;i<length;i++)
      pass += str[(Math.floor(Math.random() * str.length + 1))]

    setPassword(pass)

  } , [length,number,special,setPassword])

  useEffect(() => {
    passwordGenerator()
  },[length,number,special,passwordGenerator])

  return (
    <>
      <input type="text" value={password}></input>

      <div style={{color : 'white'}}>

        <input 
        type='range' 
        value={length} 
        onChange={(e) => {
          setLength(e.target.value)
        }}></input> 
        <label>{length}</label>


        <input 
        type='checkbox' 
        value = {number}
        onChange={(e) => {setNumber(!number)
        } }>
        </input>
        <label >numbers</label>
       
       
        <input 
        type='checkbox' 
        value = {special}
        onChange={(e) => {setSpecial(!special)
        } }>
        </input>
        <label >Special Characters</label>

        {/* <button 
        className='submit'
        onClick={passwordGenerator}>Create Password</button> */}
      </div>
    </>
  )
}

export default App
