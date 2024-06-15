import './App.css';
import About from './components/About';
import CaseStudy from './components/CaseStudy';
import Client from './components/Client';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import PriceCard from './components/PriceCard';
import Questions from './components/Questions';
import Services from './components/Services';

function App() {
  return (
    <>
      <Header />
      <About />
      <Client />
      <Services />
      <CaseStudy />
      <PriceCard />
      <Contact />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
