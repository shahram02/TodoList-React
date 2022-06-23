import styles from "./todo.module.css";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
const Todo = ({ todo, onComplete, onEdit, onRemove }) => {
//   console.log(todo.id);
  return (
    <div className={`${styles.todo}`}>
      <div
        onClick={onComplete}
        className={`${styles.title-todo} ${todo.isCompleted && styles.completed}`}
      >
        {todo.text}
      </div>
      <div className={styles.btnContainer} >
        <button className={`${styles.btn} ${styles.edit}`} onClick={onEdit}><FaEdit/></button>
        <button className={`${styles.btn} ${styles.remove}`} onClick={onRemove}><FaTrashAlt/></button>
      </div>
    </div>
  );
};

export default Todo;
