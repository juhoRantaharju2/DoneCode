import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

const App = () => {

  //tähän state homma niinku on tossa bingossa. {post: ""}
  const [todos, setTodos] = useState([]);
  const [post, setPost] = useState({id: 0, title: "", complete:false});


//this is from example solution

  const generateNewId = () => {
    const newId = Math.random() * 10000 + 1;
    const exists = todos.find((post) => post.id === newId);
    return exists ? generateNewId() : newId;

  }


  //{checked ? "deleting": ""}

  //post objektiksi ja iscompleted? 

  const renderTodos = () => {
    return todos.map((todo, i) => {
        return (
            <div key={todo.post + i}>
                <p>
                    {todo.post}
                    <input type="checkbox" id="todoDone" checked={post.complete} onChange = { () => setPost({...post, complete: !post.complete})}/> 
                    <br />
                    <button onClick={() => removeItem(todo.id)}>Remove Todo</button>
                </p>
            </div>
        );
    });
  }

  console.log(todos);
  //console.log(post);

  //const removeTodo = (posto) => {

    //const post = get
    
    //const newTodoList = todos.filter((item) => item.id !== id); 
    //setTodos(newTodoList);

  //};

  const removeItem = (id) => {
    const list = todos.filter((todo) => todo.id !== id);
  
    //list.splice(index, 1);
    setTodos(list);

  }



  const addTodo = (e) => {
    e.preventDefault();
    //setPost("");
    const newTodo = [...todos, {id: generateNewId(), post: post.title, complete:false}];
    setTodos(newTodo);
}


//<button onClick={() => newTodo()}>New to do</button>

  return (
    <div>

       <input onChange={(e) => setPost({...post, title: e.currentTarget.value})} />
       <button onClick={addTodo}>New todo</button>
       {
         renderTodos()

       }
    </div>
  );
}

export default App;
