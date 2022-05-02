import React , {useState,useEffect} from 'react';
import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos';
function Home() {

  let initTodo;
  if(localStorage.getItem('todos') === null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  const onDelete = (todo) => {
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
  const onStatusChange = (todo) => {
    var status = todo.status === 'pending' ? 'done' : 'pending';
    setTodos(todos.map((maptodo)=>{
      if(todo.sno === maptodo.sno){
        todo.status = status;
      }
      return maptodo;
    }));
  }
  const addTodo = (todoData)=>{
    let sno;
    if(todos.length === 0){
      sno = 0
    }else{
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno : sno,
      title : todoData,
      status : 'pending'
    };
    setTodos([...todos, myTodo]);    
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <div className="container">
        <AddTodo title={'TODO LIST'} addTodo={addTodo} />
        <Todos todos={todos} onStatusChange={onStatusChange} onDelete={onDelete}/>
      </div>
    </>
  )
}

export default Home;