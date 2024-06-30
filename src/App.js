import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import HomeSeriesPage from './pages/HomeSeriesPage';
import HomeFilmPage from './pages/HomeFilmPage';
import MyListPage from './pages/MyListPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/registration" element={<RegistrationPage />} />
        <Route exact path="/series" element={<HomeSeriesPage />} />
        <Route exact path="/film" element={<HomeFilmPage />} />
        <Route exact path="/my-list" element={<MyListPage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
