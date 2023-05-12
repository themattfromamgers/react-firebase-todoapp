import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import {db} from './firebase';
import {query, collection, onSnapshot, updateDoc, doc, deleteDoc} from 'firebase/firestore';

function App() {
  const [todos, setTodos] = useState([])

  const [input, setInput] = useState('');
  
  useEffect(()=>{
    const q = query(collection(db, 'todos'));
    const unsubsribe = onSnapshot(q, (querySnapshot)=>{
      let todosArr = []
      querySnapshot.forEach((doc)=>{
        todosArr.push({...doc.data(), id: doc.id})
      });
      setTodos(todosArr);
    });
    return()=> unsubsribe()
  },[]);

    // Update todo in firebase
    const toggleComplete = async (todo) => {
      await updateDoc(doc(db, 'todos', todo.id), {
        completed: !todo.completed,
      });
    };

      // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  }
  return (
    <>
      <div>
        <h3>TODO APP</h3>
        <form>
          <input type="text"
          placeholder="Add Todo"
          onChange={(e) => setInput(e.target.value)}
          />
          <button>EKLE</button>
        </form>
        <ul>
        {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
