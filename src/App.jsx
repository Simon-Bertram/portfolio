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

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
