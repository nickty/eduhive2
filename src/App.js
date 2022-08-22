
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setusername] = useState('');
  const [register, setRegister] = useState('');

  const handleInput = (e) => {
    // console.log(e.target.text);
    setusername(e.target.text);
  };

  const handleSubmit = async () => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-type': 'text/plain', // or remove this headers section
        },
        data: username,
      };
      const response = await axios.post('/user', {
        data: username,
      });

      if (response.data.ok === false) {
        setRegister(response.data.message);
      }
      if (response.data.ok === true) {
        setRegister('User added succesfully!');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Regiter as a new user</h2>
        <h3>Insert an user name below</h3>
        <h3>{register ? register : ''}</h3>
        <input
          value={username}
          style={{ padding: 10 }}
          type='text'
          onChange={handleInput}></input>
        <button style={{ marginTop: 10, padding: 5 }} onClick={handleSubmit}>
          Register
        </button>
      </header>
    </div>
  );
}

export default App;