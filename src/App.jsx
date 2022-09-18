import './App.css'
import { About } from './components/About'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { GithubStats } from './components/GithubStats'
import { Contact } from './components/Contact'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <GithubStats />
      <Contact />
    </div>
  )
}

export default App
