import { useState } from 'react'
import './TextInput.css'

export function TextInput({ setTasks }) {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = () => {
        const trimmedValue = inputValue.trim()
        if (!trimmedValue) return;

        setTasks(prev => [...prev, trimmedValue])
        setInputValue('')
    }

    return (
        <div className='TextInputContainer'>
            <input 
                type="text" 
                placeholder="Add a new task…"
                className="ToDoList-InputTextBox"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button 
                type="button"
                className="ToDoList-SubmitButton"
                onClick={handleSubmit}
                disabled={!inputValue.trim()}
            >Add</button>
        </div>
    )
}