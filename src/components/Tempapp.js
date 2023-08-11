import React, { useEffect, useState } from 'react'
import './Tempapp.css';

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Australia");



    useEffect ( () =>{
        const fetchApi = async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7aba1a723f8465e74bdfb6a15d5ffd7f`;
            const reponse = await fetch(url);
            const resJson =await Response.json();

            setCity(resJson.main);
        };

        fetchApi();
    }, [search] )

  return (
    <>
        <h1>Weather App</h1>
          
        <div className='box'>
            <div className='inputData'>
                <input
                type='search'
                value={search}
                className='inputField'
                onChange={ (event) =>{
                    setSearch(event.target.value)

                }} />
                </div>

                {
                    !city ? (
                        <p>No data found <hr/>   put your key id of api
                        </p>
                    ) : (

<>

                        <div className='info'> 
                <h2 className='location'>
                <i className="fa-solid fa-street-view"></i> {search}
                </h2>
                <h2 className='temp'> 
                 {city.temp}
                </h2>

                <h3 className='tempmin_max'> Min : 5.25 deg cel | Max : 5.25 deg cel </h3>
            </div>
            

            <div className='wave-one'></div>
            <div className='wave-two'></div>
            <div className='wave-three'></div>

</>


                    )
                }
                
         
            
        </div>
    </>
  )
}

export default Tempapp