import { Route, Routes } from 'react-router-dom'
import './App.css'
import Top from './Components/Top'
import Nav from './Components/Nav'
import Profil from './Components/Profil'
import NotFound from './Pages/NotFound'
import About from './Pages/About'
import Skils from './Pages/Skils'
import Project from './Pages/Project'
import Progress from './Pages/Progress'
import Contact from './Pages/Contact'

function App() {

  return (
    <div className='bg-pink-100'>
      {/* <MyProvider> */}
      <Top />

        <div className='flex h-fit pb-15'>
          <Profil />
          <Routes>
            <Route path="/*" element={<NotFound />}/>
            <Route path='/' element={<About />} />
            <Route path='/Skils' element={<Skils />} />
            <Route path='/Project' element={<Project />} />
            <Route path='/Progress' element={<Progress />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
          <Nav />
        </div>

      {/* </MyProvider> */}

    </div>
  )
}

export default App
