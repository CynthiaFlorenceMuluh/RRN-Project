import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage.jsx'
import Signin from './Pages/Signin.jsx'
import Navbar from './assets/Component/Navigation.jsx'
import Footer from './assets/Component/Footer.jsx'
import Review from './Pages/Review.jsx'
import Login from './Pages/login.jsx'
import About from './Pages/About.jsx'
import Admin from './Pages/admin.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { PrivateRoute } from './components/PrivateRoute.jsx'

function App() {
  return (
    <AuthProvider>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/Signin' element={<Signin/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/review' element={<PrivateRoute element={<Review/>}/>}/>
          <Route path='/admin' element={<PrivateRoute element={<Admin/>}/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
        <Footer/>
      </div>
    </AuthProvider>
  )
}

export default App;
