import {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const dataToSubmit = {
      name,
      email
    }

    axios.post('/api/send', dataToSubmit)
  }


  return (
    <div>
      <h2>Nodemailer Spike</h2>
      <br/>
      <form>
        <input id="name" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)}/>
        <input id="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
        <button onSubmit={handleSubmit}>Send Email</button>
      </form>
    </div>
  );
}

export default App;
