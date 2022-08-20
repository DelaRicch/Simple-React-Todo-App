import React from 'react'
import { BsTrash } from "react-icons/bs";

const style = {
    li: `list-none`,
    row: `flex flex-row`,
    text: `text-lg`
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