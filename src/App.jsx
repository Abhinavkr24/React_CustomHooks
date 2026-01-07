
import axios from 'axios'
import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function useTodos(){
  const [todos,setTodos] = useState([]);

useEffect(()=>{
  axios.get("http://localhost:5000/getToDo")
  .then(res=>{setTodos(res.data);
    console.log(res.data)
    
  })

},[])

return todos;
}

function App() {
  
  const todos = useTodos();

  return ( 
    <div>
      {todos.map(todo=><MyComponent todo={todo}/>)}
    </div>
  )
}

function MyComponent({todo}){
  return(
    <div>
      {todo.title}
      {todo.description}
    </div>
  )
}



export default App
