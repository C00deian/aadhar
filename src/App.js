import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PersonEntry from "./components/PersonEntry/PersonEntry";
import List from "./components/Customer-List/List";
import LogIn from "./Register/LogIn";
import Forget from "./Register/Forget";
import NewEntry from "./components/Child/NewEntry/NewEntry";
import ChildEntryList from "./components/Child/Entry_List/ChildEntryList";
import Admin from "./Users/Admin/Admin";
import Retailer from "./Users/Retailer/Retailer";
import BackOffice from "./Users/BackOffice/BackOffice";
const Routing = () => {
  return (
    <Routes>
      {/* Common Routing */}
      <Route path="/" element={<LogIn />} />
      <Route path="/forget" element={<Forget />} />
      <Route path="/home" element={<Home />} />
      {/* user decided routeing */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/retailer" element={<Retailer />} />
      <Route path="/backoffice" element={<BackOffice />} />
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
      <Routing></Routing>
    </Router>
  );
}

export default App;
