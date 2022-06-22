import styles from "./todo.module.css";
const Todo = ({ todo, onComplete, onEdit, onRemove }) => {
//   console.log(todo.id);
  return (
    <div className={`${styles.todo}`}>
      <div
        onClick={onComplete}
        className={`${todo.isCompleted && styles.completed}`}
      >
        {todo.text}
      </div>
      <div>
        <button onClick={onEdit}>ویرایش اطلاعات</button>
        <button onClick={onRemove}>حذف اطلاعات</button>
      </div>
    </div>
  );
};

export default Todo;
