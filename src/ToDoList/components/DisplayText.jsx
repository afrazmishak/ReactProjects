import './DisplayText.css';

export function DisplayText({ tasks, setTasks }) {

    const handleDelete = (id) => {
        setTasks(prev =>
            prev.filter(task => task.id !== id)
        )
    }

    const toggleComplete = (id) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        )
    }

    return (
        <ul className="ToDoList">
            {tasks.map(task => (
                <li key={task.id} className='ToDoListContainer'>
                    <span
                        className={`Text ${task.completed ? 'Completed' : ''}`}
                        onClick={() => toggleComplete(task.id)}
                    >
                        {task.text}
                    </span>

                    {!task.completed && (
                        <button
                            className="DeleteButton"
                            onClick={() => handleDelete(task.id)}
                        >
                            Delete
                        </button>
                    )}
                </li>
            ))
            }
        </ul >
    )
}