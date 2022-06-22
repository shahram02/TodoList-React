import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("فاطی دوست دارم");
      return;
    }
    props.addTodoHandler(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="هر چی می خوای بنویس..."
        onChange={changeHandler}
        value={input}
      />
      <button type="submit">اضافه کردن تودو</button>
    </form>
  );
};

export default TodoForm;
