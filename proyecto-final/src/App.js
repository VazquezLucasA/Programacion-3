import './App.css';
import Carta from './components/card/Carta';
import List from './components/items/Items';
import Header from './components/header/Header';
import Encabezado from './components/Encabezado/Encabezado';
import Main from './components/Main/Main';
import Aside from './components/Aside/Aside';
import CarrouselChico from './components/CarrouselChico/CarrouselChico';
import Publicidad from './components/Publicidad/Publicidad';
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
          <Publicidad/>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
