import React from 'react';
import './App.css';
import BookablesPage from "./Components/Bookables/BookablesList";
import BookingsPage from "./Components/Bookings/BookingsPage";
import UsersPage from "./Components/Users/UsersPage"
import UserPicker from "./Components/Users/UserPicker";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import {FaCalendarAlt, FaDoorOpen, FaUsers} from "react-icons/fa";

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/bookings" className="btn btn-header">
                  <FaCalendarAlt />
                  <span>Bookings</span>
                </Link>
              </li>
              <li>
                <Link to="/bookables" className="btn btn-header">
                <FaDoorOpen/>
                </Link>
              </li>
              <li>
                <Link to="/users" className="btn btn-header">
                  <FaUsers />
                  <span>Users</span>
                </Link>
              </li>
            </ul>
          </nav>
          <UserPicker/>
        </header>
        <Routes>
          <Route path="/bookings" element={<BookingsPage/>} />
          <Route path="/bookables" element={<BookablesPage/>}/>
          <Route path="/users" element={<UsersPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
