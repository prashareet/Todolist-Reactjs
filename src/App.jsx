import { useState,useEffect } from 'react'
import "./App.css"
import NewForm from './components/NewForm';
import TodoList from './components/TodoList';
function App() {
 
  

  
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
    if(localValue==null) return []

    return JSON.parse(localValue);
  });
  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])
    
function addTodo(title){
      setTodos((currentTodo)=>{
      return [
        ...currentTodo, {id: crypto.randomUUID(),title, completed: false}
      ]
  })
}

  function toggleTodo(id, completed){
    setTodos((currentTodos)=>{
      return currentTodos.map((todo)=>{
        if(todo.id===id){
          return {...todo, completed}
        }
        return todo;
      })
    })
  }

  function deleteTodo(id){
    setTodos((currentTodos)=>{
      return currentTodos.filter(todo =>{
        return todo.id!==id
      })
    })
  }
  
  return (
   <>
    <NewForm onSubmit ={addTodo}/>
    <h1 className='header'>To do list</h1>
    <TodoList todos={todos}
    deleteTodo={deleteTodo}
    toggleTodo={toggleTodo} />
   </>
  )
}


export default App
