import './App.css';
import React,{useState} from 'react';
function App(){
  const [todo,setTodo]=useState("")
  const[allTodos,setAllTodos]=useState([])
  return(
    <div id="container">
      <input id="box1" type="text" placeholder="Enter a todo" onChange={(event1)=>{
        setTodo(event1.target.value)
      }}/>
    <button onClick={()=>{
      if(todo.length>0){
        setAllTodos([...allTodos,todo])
      }
    }}>Add Todo</button>
    {
      allTodos.map((item,index)=>{
        return(
          <div>
            <h1>{item}</h1>
            <button onClick ={()=>{
              let newArr=[...allTodos];
              let editvalue=prompt("enter the edit todo")
              newArr[index]=editvalue
              setAllTodos(newArr)
            }}>Edit</button>

            <button onClick ={()=>{
              let deletedata=[...allTodos];
              deletedata.splice(index,1);
              setAllTodos(deletedata)
            }}>Delete</button> 

          </div>
        )
      })
    }
    </div>
  )
}
export default App;