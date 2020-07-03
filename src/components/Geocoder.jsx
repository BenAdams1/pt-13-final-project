import React from 'react'
import Geocodio from 'geocodio-library-node'

const Geocoder = () => {

    const geocoder = new Geocodio('679e8ee9f868e65f55c7f478de44e883e39ee3e');
    
    geocoder.geocode('1109 N Highland St, Arlington VA')
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      }
    );    



return (
    <div>
        Geocoder
    </div>
)
}
export default Geocoder