import { useState } from 'react'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import TaskModal from './TaskModal'
import './DisplayText.css';

export function SortableItem({ task, toggleComplete, handleDelete }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

    const [showModal, setShowModal] = useState(false)

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return (
        <>
            <li
                ref={setNodeRef}
                style={style}
                className="ToDoListContainer"
            >
                <span
                    className="Text"
                    onClick={() => toggleComplete(task.id)}
                >
                    <span className="DragHandle" {...attributes} {...listeners}>
                        ☰
                    </span>

                    <span className={`TaskText ${task.completed ? 'Completed' : ''}`}>
                        {task.text}
                    </span>

                    <span
                        className="EyeIcon"
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowModal(true)
                        }}
                    >
                        👁️
                    </span>
                </span>

                {!task.completed && (
                    <button
                        className="DeleteButton"
                        onClick={() => handleDelete(task.id)}
                    >Delete</button>
                )}
            </li>

            {
                showModal && (
                    <TaskModal
                        task={task}
                        onClose={() => setShowModal(false)}
                    />
                )
            }
        </>
    )
}