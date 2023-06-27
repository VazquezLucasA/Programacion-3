import './App.css';
import List from './components/Products/List';
import Header from './components/Slider/Slider';
import Main from './components/Main/Main';
import Aside from './components/Aside/Aside'
import CarrouselChico from './components/ZCarrouselChico/CarrouselChico';
import Publicidad from './components/Advertising/Publicidad';
import Footer from './components/Footer/Footer';
import RouterApp from './routes/RouterApp';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <div className="grid-layout">
        <div className="nav">
          <Navbar/>
        </div>
        <div className="header">
          <Header/>
        </div>
        <div className="main" >
          <CarrouselChico />
          <Main destacados="¡PRODUCTOS DESTACADOS!" />
           <List/>
        </div>
        <div className="aside">
          <Aside/> 
          <Publicidad />
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
