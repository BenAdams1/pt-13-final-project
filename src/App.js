import React, { Fragment } from 'react';
import Navbar from './components/Navbar'
import Map from './pages/map'
import Profile from './pages/profile'



function App() {
  return (
    <Fragment>
      <Navbar />
      <Map />
      <Profile />
    </Fragment>
  )
}

export default App;
