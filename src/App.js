import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import Todo from "./Todo";


const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2222f7] to-[#0b920b]`,
  container: `bg-zinc-100 max-w-[31.25rem] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border outline-0 p-2 w-full text-xl`,
  button: `p-4 ml-2 bg-blue-600 text-zinc-100`,
  count: `text-center p-3`,
}

function App() {

  const [todos, setTodos] = useState(['Learn React', 'Write Js Code'])

  return (
    <section className={style.bg}>
      <div className={style.container}>
        <h2 className={style.heading}>Todo App</h2>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder="Add Todo" />
          <button className={style.button}> <BsPlus size={32} /></button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
          <Todo />
        </ul>
        <p className={style.count}>You have 2 todos</p>
      </div>
    </section>
  );
}

export default App;
