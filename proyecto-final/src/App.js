import './App.css';
import Navbar from './components/navbar/Navbar';
import Carta from './components/card/Carta';
import List from './components/items/Items' 

function App() {
  return (
    <>
      <div className="grid-layout">
        <div className="header"></div>
        <div className="nav">
          <Navbar/>
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
