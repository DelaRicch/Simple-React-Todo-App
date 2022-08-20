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

const Todo = ({todo}) => {
  return (
    <li className={style.li}>
        <div className={style.row}>
            <input type="checkbox" />
            <p className={style.text}>{todo}</p>
        </div>
        <button><BsTrash /> </button>
    </li>
  )
}

export default Todo