import './DisplayText.css';

export function DisplayText({ tasks, setTasks }) {

    const handleDelete = (indexToDelete) => {
        setTasks(prev =>
            prev.filter((_, index) => index !== indexToDelete)
        )
    }

    return (
        <ul className="ToDoList">
            {tasks.map((task, index) => (
                <div className='ToDoListContainer'>
                    <span className="Text">{task}</span>
                    <button
                        className="DeleteButton"
                        onClick={() => handleDelete(index)}
                    >Delete</button>
                </div>
            ))
            }
        </ul >
    )
}