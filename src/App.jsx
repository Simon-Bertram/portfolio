import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Hero, Navbar, About, Tech, Experience, Contact } from "./components"
import BackgroundImage from "./components/BackgroundImage"

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <BackgroundImage>
          <header>
            <Navbar />
          </header>
          <Hero />
        </BackgroundImage>
        <About />
        <Experience />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
