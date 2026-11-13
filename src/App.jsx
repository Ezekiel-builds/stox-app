import Main from './components/Main'
import SignUp from './pages/SignUp'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
  )
}

export default App
