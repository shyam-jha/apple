import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import HowItWorks from "./components/Howitworks"
import Navbar from "./components/Navbar"

const App = () => {

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <HowItWorks />
      <Feature />
      <Footer />
    </main>
  )
}

export default App
