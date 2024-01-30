
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import PersonEntry from './components/PersonEntry/PersonEntry';
import Menubar from './pages/MenuSidebar/Menubar';
import List from './components/Customer-List/List';
import LogIn from './pages/Register/LogIn'
const Routing = () => {


  return (

    <Routes>

      <Route path="/" element={<LogIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/add-customer" element={<PersonEntry />} />
      <Route path="/list" element={<List />} />
    </Routes>

  )
}
function App() {
  return (
 

      
      <Router>
   
      <div className="App">
   
      </div>
        <Routing></Routing>
      
      </Router>
      
   
  );
}

export default App;
