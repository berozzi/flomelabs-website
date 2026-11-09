import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ScrollToHash } from './components/ScrollToHash'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Collaboration } from './pages/Collaboration'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <Layout>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produkty" element={<Products />} />
        <Route path="/wspolpraca" element={<Collaboration />} />
        <Route path="/informacje" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
