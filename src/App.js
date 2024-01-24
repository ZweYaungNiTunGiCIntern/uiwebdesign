import Header from './Header.js'
import ImageTextSection from './ImageTextSection.js'
import Home from './Home.js'
import Service from './ServiceSection.js'
import ServiceSecond from './ServiceSection2.js'
import PriceSection from './PriceSection.js'
import AdvantageSection from './AdvantageSection.js'
import SimpleCarousel from './FeedBack.js'
import About from './About.js'
import OurNews from './OurNewsSection.js'
import GetInTouch from './GetInTouchSection.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Footer from './Footer.js'
function App() {
  return (

        <div>
          <Header />
          <ImageTextSection />
          <Home />
          <Service />
          <ServiceSecond />
          <PriceSection/>
          <AdvantageSection />
          <SimpleCarousel />
          <About />
          <OurNews />
          <GetInTouch />
          <Footer />
        </div>
);
}

export default App;
