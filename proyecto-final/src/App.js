import './App.css';
import List from './components/Products/Items';
import Header from './components/Slider/Slider';
import Encabezado from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Aside from './components/Aside/Aside';
import CarrouselChico from './components/ZCarrouselChico/CarrouselChico';
import Publicidad from './components/Advertising/Publicidad';
import Footer from './components/Footer/Footer';
import RouterApp from './routes/RouterApp';

function App() {
  return (
    <>
      <div className="grid-layout">
        <div className="nav">
          <Encabezado/>
        </div>
        <div className="header">
          <Header/>
        </div>
        <div className="main">
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
