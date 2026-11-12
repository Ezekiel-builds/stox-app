import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Header />} />
    </Routes>
  )
}

export default App
