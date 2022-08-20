import React from 'react'
import { BsTrash } from "react-icons/bs";

const style = {
    li: `flex justify-between bg-zinc-200 p-4 my-2 capitalize`,
    liComplete: `flex justify-between bg-zinc-400 p-4 my-2 capitalize`,
    row: `flex`,
    text: `cursor-pointer ml-2`,
    textComplete: `cursor-pointer line-through ml-2`,
    button: `flex items-center cursor-pointer`
}

const Todo = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <div className="todo-field bg-red-400">
        <li className={todo.completed ? style.liComplete : style.li}>
            <div className={style.row}>
                <input onChange={() => toggleComplete(todo)} type="checkbox" checked={todo.completed ? 'checked' : ''} />
                <p onClick={() => toggleComplete(todo)} className={todo.completed ? style.textComplete : style.text}>{todo.text}</p>
            </div>
            <button className='del-btn' onClick={() => deleteTodo(todo.id)}><BsTrash /> </button>
        </li>
    </div>
  )
}

export default Todo