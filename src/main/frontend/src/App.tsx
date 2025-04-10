import { useEffect, useState } from 'react'
import './App.css'
import { fetchHello } from './api/hello';
import reactDom from '/reac'

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchHello().then(setMessage).catch(console.error);
  }, []);

  return <h1>{message || 'Loading...'}</h1>
}

export default App
