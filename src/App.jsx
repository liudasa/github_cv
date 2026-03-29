import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CV from './pages/CV'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cv" element={<CV />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  )
}

export default App
