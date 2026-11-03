import { Navigate, Route, Routes } from 'react-router-dom'
import CheckerBackground from './components/CheckerBackground.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  return (
    <>
      <CheckerBackground />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  )
}
