import React, {useState,useEffect} from 'react';
const AddTodo = ({addTodo,title}) => {
  const [Title, setTitle] = useState('');
  
  const submit = (e)=>{
    e.preventDefault();
    if(Title === ''){
      alert('Please Enter a Todo');
    }else{
      addTodo(Title);
      setTitle("");
    }
  }
  const setValue = (e)=>{
    let value = e.target.value;
    setTitle(value);
  }
  return (
  <>
      <h1 className="header">{title}</h1>
      <form id="create-items" onSubmit={submit} className="ui form">
        <div className="ui input focus">
          <input type="text" name="item" id="todo-input" onChange={setValue} placeholder="Add Item"/>
        </div>
        <div className="ui buttons">
          <button className="ui icon grey button"><i className="icon plus"></i></button>
          <div className="or"></div>
          <button type="button" className="ui icon black button btn-search"><i className="icon search"></i></button>
        </div>
      </form>
    </>
  )
}

export default AddTodo;