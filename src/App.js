
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import PersonEntry from './components/PersonEntry/PersonEntry';
import Menubar from './pages/MenuSidebar/Menubar';
import List from './components/Customer-List/List';
import UpdatePerson from './pages/Update/UpdatePerson';
import LogIn from "./pages/Register/LogIn"
const Routing = () => {


  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/add-customer" element={<PersonEntry />} />
      <Route path="/list" element={<List />} />
      <Route path="/update-person/:id" element={<UpdatePerson />} />
    </Routes>
  );
}
function App() {
  return (
 

      
      <Router>
      {/* <Navbar />
      <div className="App">
        <Menubar />
      </div> */}
        <Routing></Routing>
      
      </Router>
      
   
  );
}

export default App;
