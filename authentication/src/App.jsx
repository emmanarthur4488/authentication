
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './Components/SignUp/Signup'
import Welcome from './Components/Welcome/Welcome'
import Dashboard from './Components/Dashboard/Dashboard'
import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import Services from './Components/Pages/Services/Services';


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route element={<ProtectedRoute/>}>
            
          </Route>
          <Route path='/services' element={<Services/>}/>
          
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
