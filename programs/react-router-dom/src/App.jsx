import { useState } from 'react'
import Linked from './componets/Linked';
import Page1 from './componets/Page1'
import Page2 from './componets/Page2'
import Page3 from './componets/Page3'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'




function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <h2>Hi. I am a App.jsx</h2> */}
          <Route path="/" element={<Linked/>} />
          <Route path="/Page1" element={<Page1/>} />
          <Route path="/Page2" element={<Page2/>} />
          <Route path="/Page3" element={<Page3/>} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
