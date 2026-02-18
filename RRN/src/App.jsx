import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage.jsx'
import Signin from './Pages/Signin.jsx'
import Navbar from './assets/Component/Navigation.jsx'
import Footer from './assets/Component/Footer.jsx'
import Account from './Pages/Create_Account.jsx'
import Business from './Pages/business_details.jsx'
import Login from './Pages/login.jsx'
function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/Signin' element={<Signin/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/Create_Account' element={<Account/>}/>
      <Route path='/Business_detail' element={<Business/>}/>
      </Routes>
    <Footer/>
     
    </div>
  )
}

export default App;
