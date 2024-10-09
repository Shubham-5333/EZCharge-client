import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
// import AdminDashboard from '../pages/AdminDashboard/AdminDashboard';
// import UserDashboard from '../pages/UserDashboard/UserDashboard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UserRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
        {/* <Route path="/user/dashboard" element={<UserDashboard />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default UserRoutes;
