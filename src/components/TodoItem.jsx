import React from 'react'

const TodoItem = ({todo,onDelete,onStatusChange}) => {
  return (
    <div className="item-block">
        <button className="ui icon button" onClick={()=>{
          onStatusChange(todo);
        }} data-attr="done">{todo.status==='pending'?<i className="circle outline icon"></i>:<i className="check circle green icon"></i>}</button>
        <div className={`text-block ${todo.status !=='pending' ? 'done' : ''} `}>{todo.title}</div>
        <button className="ui icon button"onClick={()=>{
          onDelete(todo);
        }} data-attr="delete"><i className="trash red icon"></i></button>
    </div>
  )
}

export default TodoItem;