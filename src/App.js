
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import PersonEntry from './components/PersonEntry/PersonEntry';
import Menubar from './pages/MenuSidebar/Menubar';
const Routing = () => {


  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-customer" element={<PersonEntry/>} />
    </Routes>

  )
}
function App() {
  return (
    <div className="App">

      
      <Router>
        <Navbar/>
        <Menubar />
        <Routing></Routing>
      </Router>
      
    </div>
  );
}

export default App;
