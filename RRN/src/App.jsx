import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage.jsx'
import Signin from './Pages/Signin.jsx'
import Navbar from './assets/Component/Navigation.jsx'
import Footer from './assets/Component/Footer.jsx'
import Profile from './Pages/Profile.jsx'
import Dashboard from './Pages/Dashboard.jsx'
function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/Signin' element={<Signin/>} />
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    <Footer/>
     
    </div>
  )
}

export default App;
