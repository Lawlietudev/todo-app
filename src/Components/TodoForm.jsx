import { useState, useEffect, useRef } from "react";

const TodoForm = props => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            className="todo-input edit"
            type="text"
            name="text"
            value={input}
            placeholder="قم بكتابة تعديلك.."
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-btn edit">تم التعديل</button>
        </>
      ) : (
        <>
          <input
            className="todo-input"
            type="text"
            name="text"
            value={input}
            placeholder="قم بإضافة المهمة.."
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-btn">إضافة للقائمة</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
