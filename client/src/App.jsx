import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import './App.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if(!user) {
      axios.get('/profile').then(({data}) => setUser(data));
    }
  }, [])
  return (
      <Routes>
        <Route path="/" element={<Layout user={user}/>}>
          <Route index path="/" element={<IndexPage />} />
          <Route path="/login" element={<LoginPage setUser={setUser}/>} />
          <Route path="/register" element={<RegisterPage setUser={setUser}/>} />
        </Route> 
      </Routes> 
  )
}

export default App
