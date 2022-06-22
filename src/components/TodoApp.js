import { useState } from "react";
import styles from "./TodoApp.module.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

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
  const editHandler = (id) => {
      console.log(id);
  };
  return (
    <div className={styles.container}>
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList
        todos={todos}
        onComplete={completedHandler}
        onEdit={ editHandler}
        onRemove={removeHandler}
      />
    </div>
  );
};

export default TodoApp;
