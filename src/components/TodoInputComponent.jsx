import { useState } from "react"
function TodoInputComponent({todoitems  , setTodoItems}) {
    const [currentTodo,setCurrentTodo] = useState("")
    const handleTodoInput = (e) => {
        setCurrentTodo(e.target.value)
    }
    const handleTodo = () => {
        if(currentTodo){
            setTodoItems([...todoitems, {title: currentTodo , id : Date.now()}])
            setCurrentTodo("")   
        }else{
           alert("Please Enter Your Task")
        }
    }
  return (
    <div className="flex gap-[20px]">
        <input type="text" placeholder="Insert Your Task" className="border rounded-lg px-[20px] py-[10px] outline-none"
        onChange={handleTodoInput}
        value={currentTodo}
        />
        <button className="px-[20px] py-[10px] bg-green-600 text-white rounded-[20px]" onClick={handleTodo}>Add Task</button>
    </div>
  )
}

export default TodoInputComponent