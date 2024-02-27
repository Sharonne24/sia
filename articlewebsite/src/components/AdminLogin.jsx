import React, { useState } from 'react';
import {supabase} from '../index'
import { useNavigate } from 'react-router-dom';
// Add any additional imports as needed, for example, styling or form handling libraries

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()
 
  const handleLogin = async () => {
    try {
      // Use HTTPS or a more secure method to send credentials
      const { data, error} = await supabase.auth.signInWithPassword({email: username, password});

      if(error) throw new Error(error.message)

        if(data) navigate('/dashboard')

    } catch (error) {
      console.error('Error during login:', error);
      setError('An unexpected error occurred. Please try again.');
    }
  };
  return (
    <div>
      <h2>Admin Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;