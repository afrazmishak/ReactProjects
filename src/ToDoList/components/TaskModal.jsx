import './TaskModal.css'

export default function TaskModal({ task, onClose}) {
    return (
        <div className="ModalOverlay" onClick={onClose}>
            <div className="ModalContent" 
                onClick={(e) => e.stopPropagation}>
                    <h2>Task Details</h2>
                     <p><strong>Text:</strong></p>
                     <p>{task.text}</p>

                     <p><strong>Status:</strong> {task.completed ? 'Completed' : 'Active'} </p>

                     <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}