import React from 'react'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import SignIn from './components/SignIn/SignIn'
import Listing from './components/Listing/Listing'
import AddListing from './components/AddListing/AddListing'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="home">
        <Home/>
        <SignIn/>
      </div>
      <Listing/>
      <AddListing/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App