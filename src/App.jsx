import { useEffect } from 'react'
import Main from './components/Main'
import SignUp from './pages/SignUp'
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true,
      offset: 80,
    })
  },[])

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
  )
}

export default App
