import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mainpg from'./mainpg.jpg'

const Signup = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      
      localStorage.setItem('userData', JSON.stringify({ username, password, email }));
      alert('Account created successfully!');
      navigate('/home',{ state: { username } })
    } else {
      
      const storedUserData = JSON.parse(localStorage.getItem('userData'));

      if (storedUserData && storedUserData.username === username && storedUserData.password === password) {
        setLoggedInUser(storedUserData);
        navigate('/home',{ state: { username } })
      } else {
        alert('Invalid username or password');
      }
    }
  };

  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${mainpg})` }}>
    
 
    <div className="flex items-center justify-center min-h-screen">
  <div className="authentication-container p-8 bg-white bg-opacity-50 shadow-md rounded-md">
    <h2 className="text-2xl font-bold mb-4">{isSignUp ? 'Sign Up' : 'Login'}</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-900">Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-900">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      {isSignUp && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
      )}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
      >
        {isSignUp ? 'Sign Up' : 'Login'}
      </button>
    </form>
    <div className="mt-4 ">
     
      <button
        onClick={handleToggle}
        className="text-blue hover:underline focus:outline-none"
      >
        {isSignUp ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
      </button>
    </div>
  </div>
</div>
</div>
  );
};

export default Signup;
