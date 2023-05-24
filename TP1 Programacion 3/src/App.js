import './App.css';
import './index.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer';


function App() {
  return (
    <div className="grid-layout">
      <div className="header">
        <Header name="Lucas"/>
      </div>
      <div className="nav">
        <Nav name="Rocio"/>
      </div>
      <div className="main">
        <Main data="test"/>
      </div>
      <div className="aside">
        <Aside data="test"/>
      </div>
      <div className="footer">
        <Footer data="test"/>
      </div>
    </div>
  );
}

export default App;
