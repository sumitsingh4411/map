import './App.css';
import Header from './Header';
import Map from './Map';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
    {/* this is header section*/}
     <Header/>
     {/* this is  map section*/}
     <Map/>
    { /* this is footer section */}
     <Footer/>
    </div>
  );
}

export default App;
