import React, {useState} from 'react'
import TodoForm from './TodoForm'


function Todo() {
    const [edit, setEdit] = useState({
        id:null,
        value: ''
    })
    
  return (
    <div>
    <TodoForm/>      
    </div>
  )
, {useState}}

export default Todo
