import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage.jsx'
import Signin from './Pages/Signin.jsx'
import Navbar from './assets/Component/Navigation.jsx'
import Footer from './assets/Component/Footer.jsx'
import Review from './Pages/Review.jsx'
import Login from './Pages/login.jsx'
import About from './Pages/About.jsx'
function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/Signin' element={<Signin/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/review' element={<Review/>}/>
       <Route path='/About' element={<About/>}/>
     
      </Routes>
    <Footer/>
     
    </div>
  )
}

export default App;
