import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidenav from './components/Sidenav'
import Home from './components/Home'
import Projects from './components/Projects'

export default function App() {

  return (
    <div>
      <Sidenav />  
      <Home />
      <Projects />    
    </div>
  )
}

