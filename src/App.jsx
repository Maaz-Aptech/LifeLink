import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./ABout"
import Gallery from "./Gallery"
import Feedback from "./Feedback"
import Contact from "./Contact"
import Navbar from "./Navbar"

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about-us" element={<About />}/>
        <Route path="/image-gallery" element={<Gallery />}/>
        <Route path="/feedback" element={<Feedback />}/>
        <Route path="/contact-us" element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App
