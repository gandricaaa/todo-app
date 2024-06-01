import { MdDeleteForever } from "react-icons/md";
function TodoListComponent({todoItems , setTodoItems}) {
    const RemoveItems = (id) => {
        setTodoItems(todoItems.filter((todo) => todo.id !== id))
    }
  return (
    <div className="container mx-auto flex flex-col gap-[20px] items-center justify-center mt-[50px]">
        {todoItems.length > 0 ? todoItems.map((todo) => {
            return <div className=" flex justify-between items-center bg-slate-300 p-[20px] w-[50%] rounded-[20px]" key={todo.id}>
                <h2>{todo.title}</h2>
                <MdDeleteForever size={32} color="red" onClick={() => RemoveItems(todo.id)} cursor={"pointer"}/>
            </div>
        }) : <h2>Hey you dont have Task Today!!!</h2>}
    </div>
  )
}

export default TodoListComponent