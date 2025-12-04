import Requiem from './components/Requiem/Requiem.tsx';
import './App.css'
import Home from "./components/Home/Home.tsx"
import Vision from "./components/Vision/Vision.tsx"
import Contacts from "./components/Contacts/Contacts.tsx"
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
