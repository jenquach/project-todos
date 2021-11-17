import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const TodoList = () => {
  const items = useSelector(store => store.todos.items) //reference the slice with store.todos

  const dispatch = useDispatch()

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id))
  }

  //v1
  // const onDeleteTodoMutability = (index) => {
  //   dispatch(todos.actions.deleteTodo(index))
  // }

  //v2
  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id))
  }

  return (
    <section>
      {items.map((item, index) => (
        <div className="flex-item" key={item.id}>
          <p>{item.text}</p>
          <input 
            type="checkbox" 
            checked={item.isComplete} 
            onChange={() => onToggleTodo(item.id)} 
          />
          <button onClick={() => onDeleteTodo(item.id)}>Delete</button>
        </div>
      ))}
    </section>
  ) 
}
 
export default TodoList;