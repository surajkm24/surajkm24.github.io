import './App.css'
import { About } from './components/About'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
