import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import AddTodoItem from './MyComponents/AddTodoItem';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './MyComponents/About';




function App() {

  let initialtodos;
  if (localStorage.getItem("todos") === null) {
    initialtodos = [];

  }
  else {
    initialtodos = JSON.parse(localStorage.getItem("todos"));
  }


  
  const onDelete = (todo) => {
    console.log("hi i am deleted", todo);
    /*console.log("all items before delete",todos);
    let index=todos.indexOf(todo);
    todos.splice(index,1);
    console.log("all items after delete",todos);*/
    /* above code will not work in reactwe have to use setTodos function for update*/

    setTodos(todos.filter((todoitem) => {
      return todoitem !== todo;
    }));

    // localStorage.setItem("todos", JSON.stringify(todos));

  }

  const addTodosingleitem = (title, desc) => {
    console.log("todo item is going to add", title, desc);
    let sno = 0;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    console.log(mytodo);
    //we used spread operator merge two array into one
    setTodos([...todos, mytodo]);



    //localStorage.setItem("todos", JSON.stringify(todos));  

  }

  //todos array which have each todoitem
  const [todos, setTodos] = useState(initialtodos);
  useEffect(
    () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    },
    [todos]
  );

  return (
    <>
      <Router>

        <Header title="My Todo List" />

        <Switch>

          <Route exact path="/" render={() => {
            return (<>
              <AddTodoItem addTodosingleitem={addTodosingleitem} />
              <Todos todos={todos} onDelete={onDelete} />
            </>)
          }}>

          </Route>

          <Route exact path="/about">
            <About />
          </Route>


        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
