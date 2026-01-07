
import axios from 'axios'
import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  const[inputValue,setInputValue] = useState('');
  
  const debounce = useDebounce(inputValue,500) 
   
  console.log(debounce);
  
  
  return(
    <div>
       <input type='text' placeholder='type your text here'
       value={inputValue}
       onChange={(e)=>{console.log("value changed");
          setInputValue(e.target.value)
       }}

       />
    </div>
  )
  
}



function useDebounce(val,n){
 
  const[debouncedValue,setDebouncedValue] = useState(val);

  useEffect(()=>{
    const timerId = setInterval(()=>{
      setDebouncedValue(val)
    },n)

    return()=>clearTimeout(timerId)
  },[val,n])

  return debouncedValue;
  
}



export default App
