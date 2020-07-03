import React, { Fragment } from 'react';
import Navbar from './components/Navbar'
import Map from './pages/map'
import Form from './pages/profile/Form'



function App() {
  return (
    <Fragment>
      <Navbar />
      <Map />
      <Form />
    </Fragment>
  )
}

export default App;
