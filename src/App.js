import './App.css';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';

function App() {
  return (
    <div className="App bg-cyan-50">
       <Header></Header>
       <Home></Home>
       <Footer></Footer>
    </div>
  );
}

export default App;
