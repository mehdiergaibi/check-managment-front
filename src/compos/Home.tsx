import Analytics from "./Home/Analytics"
import Footer from "./Home/Footer"
import Hero from "./Home/Hero"
import Newsletter from "./Home/NewsLetter"
import Pricing from "./Home/Pricing"

const Home = () => {
  return (
    <div>
        <Hero />
        <Analytics />
        <Newsletter />
        <Pricing />
        <Footer />
    </div>
  )
}

export default Home