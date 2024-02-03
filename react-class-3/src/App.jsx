
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Product from './Components/Product/Product'
import CreatePlan from './Components/CreatePlan/CreatePlan'
import Box from './Components/Box/Box'
import Home from './Components/Home/Home'
import Rice from '/src/IMG/rice.jpg'
import Boga from '/src/IMG/boga.jpg'
import Sauce from '/src/IMG/sauce.jpg'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductDetails from './Components/Product/ProductDetails'


function App() {

  const foods = [
    {id: 1, foodname: 'Rice', image: Rice, price: '$4'},
    {id: 2, foodname: 'Boga', image: Boga, price: '$4'},
    {id: 3, foodname: 'Sauce', image: Sauce, price: '$4'},
    {id: 4, foodname: 'Rice', image: Rice, price: '$4'},
    {id: 5, foodname: 'Boga', image: Boga, price: '$4'},
    {id: 6, foodname: 'Sauce', image: Sauce, price: '$4'},
    {id: 7, foodname: 'Rice', image: Rice, price: '$4'},
    {id: 8, foodname: 'Boga', image: Boga, price: '$4'},
    {id: 9, foodname: 'Sauce', image: Sauce, price: '$4'},
    {id: 10, foodname: 'Rice', image: Rice, price: '$4'},
    {id: 11, foodname: 'Boga', image: Boga, price: '$4'},
    {id: 12, foodname: 'Sauce', image: Sauce, price: '$4'}
]

  return (
    <>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Product foods={foods}/>}/>
          <Route path='/product/:name' element={<ProductDetails foods={foods}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/createplan' element={<CreatePlan/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
