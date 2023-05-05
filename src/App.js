import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Read from './Components/Read'
import Create from './Components/Create'
import Edit from './Components/Edit'
import Error404 from './Components/Error404'
const App = () => {
  return (
    <div className='container'>
    <div className="text">
    <h1 style={{color:'teal',fontWeight:'bold',border:'1px solid',padding:'1rem',textAlign:'center'}}>CRUD App</h1>
    </div>
      <Routes>
      <Route path="/" element={<Read/>}></Route>
      <Route path="/create" element={<Create/>}></Route>
      <Route path="/edit" element={<Edit/>}></Route>
      <Route path="*" element={<Error404/>}></Route>

      </Routes>
    </div>
  )
}

export default App
