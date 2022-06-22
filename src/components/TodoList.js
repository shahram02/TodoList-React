import Todo from "./Todo";

const TodoList = ({ todos, onComplete, onEdit, onRemove }) => {
  const renderTodos = () => {
    if (todos.length === 0) {
      return <p>ایده تو بنویس</p>;
    }
    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onComplete={() => onComplete(todo.id)}
          onEdit={() => onEdit(todo.id)}
          onRemove={() => onRemove(todo.id)}
        />
      );
    });
  };
  return <section>{renderTodos()}</section>;
};

export default TodoList;
