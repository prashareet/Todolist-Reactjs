import React from 'react'
import Todoitem from './Todoitem'

function TodoList({todos, deleteTodo, toggleTodo }) {
  return (
    <ul className='list'>
      {todos.length===0 && "No todos"}
      {
        todos.map((todo)=>{
          return (
            <Todoitem 
            id = {todo.id}
            title={todo.title}
            completed={todo.completed}
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}/>
          )
        })
      }
    </ul>
  )
}

export default TodoList