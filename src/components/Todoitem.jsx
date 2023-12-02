import React from 'react'

function Todoitem({id, completed,title, toggleTodo, deleteTodo }) {
  return (
    <li>
              <label>
                <input type="checkbox" checked = {completed} onChange={e=> toggleTodo(id, e.target.checked)
                }/>
                {title}
              </label>
              <button className='btn btn-danger' onClick={()=>{
                deleteTodo(id)
              }}>Delete</button>
    </li>
  )
}

export default Todoitem