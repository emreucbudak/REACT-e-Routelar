import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar'
import Mission from './components/Mission'
import ErrorPage from './components/ErrorPage'
import History from './components/History'
import Team from './components/Team'
import Company from './components/Company'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Home/>}></Route>
      <Route path='/aboutUS' element= {<AboutUs/>}></Route>
      <Route path='/Mission' element= {<Mission/>}></Route>
      <Route path='/history' element= {<History/>}>
      <Route path = 'team' element= {<Team/>}></Route>
      <Route path = 'company' element= {<Company/>}></Route>
      </Route>
      <Route path='*' element= {<ErrorPage/>}></Route>
    </Routes>
    </>
  )
}

export default App
