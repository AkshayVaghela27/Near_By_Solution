
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [allowLocation, setAllowLocation] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', username, password);
    navigate('/map');
  };

  return (
    <div className='App'>
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            required
            type="checkbox"
            id="allowLocation"
            className="mr-2"
            checked={allowLocation}
            onChange={() => {
            setAllowLocation(!allowLocation);
            }}
          />
          <label htmlFor="allowLocation" className="text-gray-600 text-sm">
            Allow location
          </label>
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
    </div>
  );
};

export default Login;
