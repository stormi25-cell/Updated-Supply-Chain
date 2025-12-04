import { useState } from 'react'
import './App.css'
import Requiem from 'src/components/Requiem';
import './App.css'
import Home from "./Home"
import Vision from "./Vision"
import Contacts from "./Contact"
import { BrowserRouter, Routes, Route  } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
    <Routes>
            <Route path= "/" element= {<Home />}/>
            <Route path= "/Home" element= {<Home />}/>
            <Route path = "/About" element = {<Requiem/>}/>
            <Route path = "/Vision" element = {<Vision/>}/>
            <Route path = "/Contacts" element = {<Contacts/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
