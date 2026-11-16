import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { PrivacyPolicy } from './pages/PrivacyPolicy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<Navigate to="/privacy-policy/vitelo" replace />} />
      <Route path="/privacy-policy/:app" element={<PrivacyPolicy />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
