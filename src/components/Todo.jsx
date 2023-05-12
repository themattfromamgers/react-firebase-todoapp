import React from "react"
const Todo = ({todo})=>{
    
    return(
        <li>
            <div>
                <input type="checkbox" />
                <p>{todo.text}</p>
            </div>
            <button> delete </button>
        </li>

    )
}

export default Todo