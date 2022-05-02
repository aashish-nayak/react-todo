import React from 'react';
import TodoItem from './TodoItem';

const Todos = (props) => {
  return (
    <section className="list-items">
      <div id="todo-container">
        {props.todos.map((todo)=>{
          return <TodoItem todo={todo} key={todo.sno} onStatusChange={props.onStatusChange} onDelete={props.onDelete} />
        })}
      </div>
    </section>
  )
}

export default Todos;