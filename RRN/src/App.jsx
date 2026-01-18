import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage.jsx'
import Signin from './Pages/Signin.jsx'
import Navbar from './assets/Component/Navigation.jsx'
import Footer from './assets/Component/Footer.jsx'
function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/Signin' element={<Signin/>} />
    </Routes>
    <Footer/>
     
    </div>
  )
}

export default App;
