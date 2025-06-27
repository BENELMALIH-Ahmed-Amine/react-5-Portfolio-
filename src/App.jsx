import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
import Profil from './Components/Profil'
import Top from './Components/Top'
import About from './Pages/About'

function App() {

  return (
    <div className='bg-pink-100'>
      <Top />

      <div className='flex h-fit'>
        <Profil />
        <Routes>
          <Route path='/' element={<About />} />
        </Routes>
        <Nav />
      </div>

    </div>
  )
}

export default App
