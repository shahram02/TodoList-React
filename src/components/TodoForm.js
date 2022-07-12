import { useEffect, useRef, useState } from "react";
import styles from "./todoForm.module.css";
import { FaSearch } from "react-icons/fa";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("مقدار اینپوت خالی هست");
      return;
    }
    props.addTodoHandler(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.containerInput} >
        <label className={`${styles.label}`}>
          <FaSearch />
        </label>
        <input
          type="text"
          placeholder={props.edit ? "ویرایش کن" : "هر چی می خوای بنویس"}
          onChange={changeHandler}
          value={input}
          ref={inputRef}
          className={styles.input}
        />
      </div>
      <button
        type="submit"
        className={`${styles.btn} ${
          props.edit ? styles.updatedTodo : styles.addTodo
        }`}
      >
        {props.edit ? "ویرایش" : "اضافه کردن تودو"}
      </button>
    </form>
  );
};

export default TodoForm;
