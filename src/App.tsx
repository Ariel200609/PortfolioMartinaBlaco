
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-20">
        <Hero />
        <AboutMe />
        <Servicios />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App; 