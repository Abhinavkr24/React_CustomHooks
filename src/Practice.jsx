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
