import './App.css';
import Navbar from './components/navbar';
import MainContent from './components/content';
import Footer from './components/footer';
import ProductCard from './components/product';
import ContactForm from './components/forms';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <div className="my-8">
        <ProductCard />
      </div>
      <div className="my-8">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
