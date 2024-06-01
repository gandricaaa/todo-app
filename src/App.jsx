
import TodoInputComponent from "./components/TodoInputComponent"
import TodoListComponent from "./components/TodoListComponent"
import { useEffect, useState } from "react"

function App() {
  // Smesti sve TODOS !!!!
  const [todoItems, setTodoItems] = useState([])
  //  
  useEffect (() => {
    console.log(todoItems);
  } , [todoItems])
  return (
    <div className="flex flex-col justify-center items-center gap-[20px]">
        <h1 className="text-[60px] text-green-700 font-extrabold my-[30px]">TODO APP</h1>
        <TodoInputComponent todoitems={todoItems} setTodoItems={setTodoItems}/>
        <TodoListComponent todoItems={todoItems} setTodoItems={setTodoItems}/>
      
    </div>
  )
}

export default App
