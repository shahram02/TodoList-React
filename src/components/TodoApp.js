import { useEffect, useState } from "react";
import styles from "./TodoApp.module.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoNavbar from "./TodoNavbar";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("All");

  useEffect(() => {
    filterTodos(status);
  }, [todos,status]);

  const addTodoHandler = (inputValue) => {
    const newTodo = {
      id: new Date().getTime(),
      text: inputValue,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
    // console.log(todos);
  };
  const completedHandler = (id) => {
    const findIndex = todos.findIndex((todo) => todo.id === id);
    const selectedTodos = { ...todos[findIndex] };
    console.log(selectedTodos);
    selectedTodos.isCompleted = !selectedTodos.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[findIndex] = selectedTodos;
    setTodos(updatedTodos);
    console.log(updatedTodos);
  };
  const removeHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const updatedHandler = (id, newValue) => {
    const findIndex = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[findIndex] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[findIndex] = selectedTodo;
    setTodos(updatedTodos);
  };

  const filterTodos = (status) => {
    if (status === "Completed") {
      return setFilteredTodos(todos.filter((todo) => todo.isCompleted));
    } else if (status === "UnCompleted") {
      return setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
    }
    return setFilteredTodos(todos);
  };
  const changeHandler = (e) => {
    setStatus(e.target.value);
    filterTodos(e.target.value);
  };

  return (
    <div className={styles.container}>
      <TodoNavbar
        unCompleted={todos.filter((todo) => !todo.isCompleted).length}
        onChange={changeHandler}
        status={status}
      />
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList
        todos={filteredTodos}
        onComplete={completedHandler}
        onRemove={removeHandler}
        onUpdatedHandler={updatedHandler}
      />
    </div>
  );
};

export default TodoApp;
