//this page is just for practice , Donot refer to this page for any information

/*class MyComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {count:0}
  }

  increment=()=>{
    this.setState({count:this.state.count+1});
  }
  
  render(){
  return(
    <div onClick={this.increment}>
      this is count {this.state.count}

    </div>

  )
  }
}

another code 

import React from 'react'
import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const[render,setRender] = useState(true);

useEffect(()=>{
  setTimeout(()=>{setRender(false)},10000)
},[render])
  return (
    <>
      {render?<div><MyComponent/></div>:<></>}
    </>
  )
}

function MyComponent(){
  useEffect(()=>{
    console.log("component mounted")
    return()=> (
      console.log("component unmounted")
    )
  },[])

  return(
  <div>
    from inside my component 
  </div>
)
}



export default App



 {todo.map(todo=>{<MyComponent todo={todo}/>})} */



 //custom hooks
 /*function useTodos(n){
  const [todos,setTodos] = useState([]);
  const[loading,setLoading] = useState(true)

useEffect(()=>{
  const interval = setInterval(()=>{
    axios.get("http://localhost:5000/getToDo")
    .then(res=>{setTodos(res.data);
    console.log(res.data)
    setLoading(false)
  })
  },n*1000)
  axios.get("http://localhost:5000/getToDo")
  .then(res=>{setTodos(res.data);
    console.log(res.data)
    setLoading(false)
  })

  return()=>{
    clearInterval(interval);
  }

},[n])

return {todos,loading};
}

function App() {
  
  const {todos,loading} = useTodos(5);

  if(loading){
    return(
      <div>
        loading
      </div>
    )
  }else return ( 
    <div>
      {todos.map(todo=><MyComponent1 todo={todo}/>)}
    </div>
  )
}

function MyComponent1({todo}){
  return(
    <div>
      {todo.title}
      {todo.description}
    </div>
  )
}*/


//isOnline Custom Hooks

/*import axios from 'axios'
import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  
  const isOnline = useIsOnline();

  if(isOnline){
    return(
   <div>
    you are online
   </div>
  )
  }else{
    return(
     <div>
      you are offline
     </div>
    )
  }
  
}



function useIsOnline(){
   
  const[isOnline,setIsOnline] = useState(window.navigator.onLine);

  useEffect(()=>{
    window.addEventListener('online',()=>setIsOnline(true));
    
    window.addEventListener('offline',()=>setIsOnline(false));

  },[])

  return isOnline
}



export default App*/


//-----------------------------------------------------------------------------------------------
//useInterval

/* 
import axios from 'axios'
import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  const[count,setCount] = useState(0)

  useIntervl(()=>{setCount(c=>c+1)},1000)
  
  return(
    <div>
       this is count {count}
    </div>
  )
  
}



function useIntervl(fn,n){
 
  useEffect(()=>{
    setInterval(()=>{fn()},n)
  },[])
}



export default App
 */


