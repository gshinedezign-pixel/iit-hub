import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Admissions from './pages/Admissions'
import Contact from './pages/Contact'
import Catalog from './pages/Catalog'
import Hot from './pages/Hot'
import Sale from './pages/Sale'
import Inspires from './pages/Inspires'
import Support from './pages/Support'
import ThemeFeatures from './pages/ThemeFeatures'
import './App.css'

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-fill">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/hot" element={<Hot />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/inspires" element={<Inspires />} />
            <Route path="/support" element={<Support />} />
            <Route path="/theme-features" element={<ThemeFeatures />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
