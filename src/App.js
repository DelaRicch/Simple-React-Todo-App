import React, { useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import Todo from "./Todo";

import {db} from './firebase'
import { query, collection, onSnapshot, QuerySnapshot, updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore";

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

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('')

  // Create Todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    await addDoc (collection(db, 'todos'), {
      text: input,
      completed: false
    })
    
    setInput('')

  }
  // Read Todo from Firebase
  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsuscribe = onSnapshot(q, (QuerySnapshot) => {
      let todosArr =[]
      QuerySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id})
      });

      setTodos(todosArr)
    })
    return () => unsuscribe()
  }, [])
  // Update Todo in Firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }
  // Delete Todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }

  return (
    <section className={style.bg}>
      <div className={style.container}>
        <h2 className={style.heading}>Todo App</h2>
        <form onSubmit={createTodo} className={style.form}>
          <input required value={input} onChange={(e) => setInput(e.target.value)} className={style.input} type="text" placeholder="Add Todo" />
          <button className={style.button}> <BsPlus size={32} /></button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
          ))}
        </ul>
        {
          todos.length < 1 ? '' : <p className={style.count}>{`You have ${todos.length} todos`}</p>
        }
        
      </div>
    </section>
  );
}

export default App;
