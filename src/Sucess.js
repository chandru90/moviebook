import React from 'react'
import { useLocation } from 'react-router-dom'

const Sucess = () => {
    const location = useLocation();
    const { movieName, genres,numberOfTickets,image } = location.state || {};
  return (
   
    <div className='grid grid-cols-2 ml-9 bg-black'>
        <div className='mt-10 ml-10'>
        <img src={image && image.medium}  className='w-full h-2/3 rounded-lg shadow-md' />
      </div><div className='ml-10 mt-80 '>
        <h1 className='mb-10 text-4xl text-red-900'>Tickets booked sucessfully !</h1>
    <p className='mb-10 text-lg  text-red-900'>Movie Name: {movieName}</p>
      <p className='mb-10 text-lg  text-red-900'>Genres: {genres }</p>
      <p className='mb-10 text-lg  text-red-900'>Number Of Tickets:<span className='ml-5'>{numberOfTickets}</span></p>
      </div>
      </div>
  )
}

export default Sucess