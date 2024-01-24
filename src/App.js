
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
const Routing = () => {


  return (

    <Routes>
      <Route path="/" element={<Home />} />

    </Routes>

  )
}
function App() {
  return (
    <div className="App">

      
      <Router>
        <Navbar></Navbar>
        <Routing></Routing>
      </Router>
      
    </div>
  );
}

export default App;
