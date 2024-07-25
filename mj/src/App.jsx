
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import Greet from './components/Greet'
import Mapping from './components/Mapping'
import Api from './components/Api'
import Posts from './components/Posts'
import Poke from './components/Poke'

function App() {

  return (
    <>

      <Navbar /><br /><br /><br /><br /><br />
      <Routes>
        <Route path='/sign' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/state' element={<Statebasics />} />
        <Route path='/count' element={<Counter />} />
        <Route path='/greet' element={<Greet />} />
        <Route path='/map' element={<Mapping />} />
        <Route path='/api' element={<Api />} />
        <Route path='/post' element={<Posts />} />
        <Route path='/poke' element={<Poke />} />


      </Routes>


    </>
  )
}

export default App
