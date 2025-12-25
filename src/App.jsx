import {Routes, Route } from 'react-router-dom'
import ToDoList from './ToDoList/ToDoList'
import Home from './ToDoList/components/Home'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo-list" element={<ToDoList />} />
    </Routes>  
  )
}

export default App
