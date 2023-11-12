import React, { useState } from 'react'

function ListTodoComponent() {
    const dummyData=[
        {
            "id": 1,
            "title":"Learn Core Java",
            "description":"learn",
            "completed": false
        },
        {
            "id": 2,
            "title":"Learn Core JavaScript",
            "description":"learn",
            "completed": false
        }

    ]

    const [todos, setTodos] = useState(dummyData)


  return (
    <div className='container'>
        <h2 className='text-center'>List of Todos</h2>
        <div>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Todo Title</th>
                        <th>Todo Description</th>
                        <th>Todo Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => 
                            <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.completed ? 'YES' : 'NO'}</td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default ListTodoComponent