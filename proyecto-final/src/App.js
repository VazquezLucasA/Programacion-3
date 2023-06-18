import './App.css';
import Carta from './components/card/Carta';
import List from './components/items/Items';
import Header from './components/header/Header';
import Encabezado from './components/Encabezado/Encabezado';

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
           <Carta/>
           <List/>
        </div>
        <div className="aside"></div>
        <div className="footer"></div>
      </div>
    </>
  );
}

export default App;
