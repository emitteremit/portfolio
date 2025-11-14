import React from 'react'
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Homepage from './pages/Homepage';
import Todo from './pages/Todo';
import Contactus from './pages/Contactus';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ShoppingCart from './pages/ShoppingCart';
import Formvalid from './pages/Formvalid';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element ={<Homepage/>}/>
          <Route path='/todolist' element ={<Todo/>}/>
          <Route path='/contact' element ={<Contactus/>}/>
          <Route path='/about' element ={<About/>}/>
          <Route path='/skills' element ={<Skills/>}/>
          <Route path='/projects' element ={<Projects/>}/>
          <Route path='/ShoppingCart' element ={<ShoppingCart/>}/>
          <Route path='/Form' element ={<Formvalid/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
