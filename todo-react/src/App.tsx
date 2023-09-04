import { Todos } from './components/Todos'
import './App.css'
import { AddTodo } from './components/AddTodo'
import { Todo } from './models/Todo'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Lorem", false)
  ]);

  const addTodo = (textFromUser: string): void => {
    setTodos([...todos, new Todo(textFromUser, false)]);
  };

  return (
    <>
      <AddTodo createTodo={addTodo} />
      <Todos todoList={todos} />
    </>
  )
}

export default App
