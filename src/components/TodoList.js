import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import styles from "./todoList.module.css"

const TodoList = ({ todos, onComplete, onRemove, onUpdatedHandler }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });
  const editTodo = (newValue) => {
    onUpdatedHandler(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };
  const renderTodos = () => {
    if (todos.length === 0) {
      return <p className={styles.nothingInTodos}>ایده تو بنویس</p>;
    }
    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onComplete={() => onComplete(todo.id)}
          onEdit={() => setEdit(todo)}
          onRemove={() => onRemove(todo.id)}
        />
      );
    });
  };
  return (
    <section className={styles.sectionTodo}>
      {edit.id ? (
        <TodoForm addTodoHandler={editTodo} edit={edit} />
      ) : (
        renderTodos()
      )}
    </section>
  );
};

export default TodoList;
