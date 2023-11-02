import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <>
    
 
    
      <Routes>
         <Route path='/' element={<Layout/>}>
              <Route index element={<h1>home page</h1>}/>
              <Route path='about' element={<h1>about page</h1>}/>
              <Route path='services' element={<h1>service page</h1>}/>
         </Route>
      </Routes>
    
    
    
    </>
  )
}

export default App