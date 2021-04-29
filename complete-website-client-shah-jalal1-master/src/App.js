import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddService from './components/AddService/AddService';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import MangageService from './components/Dashboard/ManageService/MangageService';
import { createContext, useState } from 'react';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AddBooking from './components/AddBooking/AddBooking';
import BookingList from './components/Dashboard/BookingList/BookingList';
import OrderList from './components/Dashboard/OrderList/OrderList';
import AddReview from './components/AddReview/AddReview/AddReview';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path="/addBooking/:id">
          <AddBooking></AddBooking>
        </PrivateRoute>
        <Route path="/addService">
          <AddService></AddService>
        </Route>
        <Route path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/service/manageService">
          <MangageService></MangageService>
        </Route>
        <PrivateRoute path="/bookings/bookingList">
          <BookingList></BookingList>
        </PrivateRoute>
        <PrivateRoute path="/orderList">
          <OrderList></OrderList>
        </PrivateRoute>
        <PrivateRoute path="/addBooking">
          <AddBooking></AddBooking>
        </PrivateRoute>
        <Route path="/addReview">
          <AddReview></AddReview>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
