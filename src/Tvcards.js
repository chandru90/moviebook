import React, { useState, useEffect } from 'react';
import { Link ,useLocation,useNavigate} from 'react-router-dom';

const Tvcards = () => {
  const [tvShows, setTvShows] = useState([]);
  const location = useLocation();
  const usernameFromState = location.state ? location.state.username : null;
  const navigate =useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setTvShows(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
  <div className="top-bar ml-96">
    
      <div>
        <p>Welcome, {usernameFromState}!</p>
        <button onClick={()=>(navigate('/'))}>Logout</button>
      </div>
   
  </div>

  <div className="grid grid-cols-4 ml-10 gap-4 bg-black p-4">
    {tvShows.map((show) => (
      <div key={show.show.id} className="tv-show-card border border-gray-500 p-4 hover:border-black hover:shadow-lg">
        <img src={show.show.image && show.show.image.medium} alt={show.show.name} className="mb-2 w-full" />
        <h3 className="text-white text-lg font-bold">{show.show.name}</h3>
        <p className="text-gray-300">{show.show.genres.join(', ')}</p>
        <Link to={`/details/${show.show.id}`} className="text-blue-500 hover:underline">View More</Link>
      </div>
    ))}
  </div>
</div>
  
    
  
  );
};

export default Tvcards;
