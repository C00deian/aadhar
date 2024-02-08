import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PersonEntry from "./components/PersonEntry/PersonEntry";
import List from "./components/Customer-List/List";
import LogIn from "./pages/Register/LogIn";
import NewEntry from "./components/Child/NewEntry/NewEntry";
import ChildEntryList from "./components/Child/Entry_List/ChildEntryList";
const Routing = () => {
  return (
    <Routes>
      {/* Common Routing */}
      <Route path="/" element={<LogIn />} />
      <Route path="/home" element={<Home />} />

      {/* Customers Routing */}
      <Route path="/add-customer" element={<PersonEntry />} />
      <Route path="/list" element={<List />} />


      {/* Child Routing */}
      <Route path="/new-entry" element={<NewEntry />} />
      <Route path="/child-entry-list" element={<ChildEntryList />} />
      

    </Routes>
  );
};
function App() {
  return (
    <Router>
      <div className="App"></div>
      <Routing></Routing>
    </Router>
  );
}

export default App;
