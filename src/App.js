import './App.css';
import LandingApp from './AppComponents/LandingApp';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function App ()
{
  return (
    <div className="App">
      <Navbar />
      <LandingApp />
      <Footer />
    </div>
  );
}

export default App;
