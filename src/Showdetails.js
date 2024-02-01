import React, { useState, useEffect } from 'react';
import { useParams, Link,useNavigate } from 'react-router-dom';

const Showdetails = () => {
  const [showDetails, setShowDetails] = useState(null);
  const [numberOfTickets, setNumberOfTickets] = useState('');
  const { id } = useParams();
  const navigate=useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShowDetails(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleBookTicket = () => {
    // Add logic to book a ticket for the show
    navigate('/sucess', { state: { movieName: showDetails.name, genres: showDetails.genres ,numberOfTickets: numberOfTickets,image:showDetails.image} })
    console.log('Booking ticket for:', showDetails.name);
  };
  const handleNumberOfTicketsChange = (event) => {
    setNumberOfTickets(event.target.value);
  };
  if (!showDetails) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 p-8 bg-black">
      <div>
        <img src={showDetails.image && showDetails.image.medium} alt={showDetails.name} className='w-1/2 h-auto rounded-lg shadow-md ml-96' />
      </div>
      <div className=''>
        <h2 className="text-3xl font-semibold mb-4 text-gray-400">{showDetails.name}</h2>
        <p className="text-gray-400 text-xl">{showDetails.summary}</p>
        <p className="text-gray-600 mt-4 text-2xl">Genres: {showDetails.genres.join(', ')}</p>
        <p className="text-gray-600 text-2xl">Runtime: {showDetails.runtime} minutes</p>
        <p className="text-gray-600 text-2xl">Status: {showDetails.status}</p>
        <p className="text-gray-600 text-2xl">Rating: {showDetails.rating && showDetails.rating.average}</p>
        <p className="text-gray-600 text-2xl">Premiered: {showDetails.premiered}</p>
        <p className="text-gray-600 text-2xl">Network: {showDetails.network && showDetails.network.name}</p>
        <p className="text-gray-600 text-2xl">Schedule: {showDetails.schedule && showDetails.schedule.time} on {showDetails.schedule && showDetails.schedule.days.join(', ')}</p>
        <div className='mt-24'>
      
        <select value={numberOfTickets} onChange={handleNumberOfTicketsChange}>
          <option value="">Number of tickets</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
     
    </div>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-md mt-6 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
          onClick={handleBookTicket}
        >
          Book Ticket
        </button>
        <Link to="/home" className="text-blue-500 hover:underline block mt-4">Back to TV Shows</Link>
      </div>
    </div>
  );
};

export default Showdetails;

