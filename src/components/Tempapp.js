import React from 'react'
import './Tempapp.css';

const Tempapp = () => {
  return (
    <>
        <h1>Weather App</h1>
          
        <div className='box'>
            <div className='inputData'>
                <input
                type='search'
                className='inputField'
                onChange={ (event) =>{

                }} />
                </div>
                
            <div className='info'> 
                <h2 className='location'>
                <i className="fa-solid fa-street-view"></i>
                </h2>
                <h2 className='temp'> 5.35 deg cel

                </h2>

                <h3 className='tempmin_max'> Min : 5.25 deg cel | Max : 5.25 deg cel </h3>
            </div>
            

            <div className='wave-one'></div>
            <div className='wave-two'></div>
            <div className='wave-three'></div>
            
        </div>
    </>
  )
}

export default Tempapp