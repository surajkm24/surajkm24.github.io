import './App.css'
import { About } from './components/About'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import {Education} from './components/Education'
import { Skills } from './components/Skills'

function App() {

  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <Education/>
     <Skills/>
    </div>
  )
}

export default App
