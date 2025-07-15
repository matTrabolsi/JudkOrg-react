// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider} from './context/AuthContext';

// Import Layout Components
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NewsWrap from './components/NewsWrap/NewsWrap';

// Import Page Components
import HomePage from './pages/HomePage/HomePage';
import MissionPage from './pages/MissionPage/MissionPage';
import MembersPage from './pages/MembersPage/MembersPage';
import NewsPage from './pages/NewsPage/NewsPage';
import ElectivesPage from './pages/Electives/ElectivesPage';
import ConferencePage from './pages/Conference/ConferencePage';
import LoginPage from './pages/LoginPage/LoginPage'; // Import the new LoginPage
import DashboardPage from './pages/DashboardPage/DashboardPage';
// Import Auth Components (Note: These are used within LoginPage, or can be displayed globally if needed)
// import AuthForm from './components/AuthForm/AuthForm';
// import AuthStatus from './components/AuthStatus/AuthStatus';

// Import Private Route
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AdminMembersPage from './pages/DashboardPage/AdminMemebersPage/AdminMembersPage';
import DashboardLayout from './pages/DashboardPage/DashboardLayout';

function App() {
  return (
    <Router>
      {/* AuthProvider wraps the entire application to provide auth context globally */}
      <AuthProvider>
        <div className="back__color"></div>
        <Header />
        <NewsWrap />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/mission' element={<MissionPage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/login' element={<LoginPage />} /> {/* Route for the login/signup page */}

          {/* Protected routes that require authentication */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute> {/* Protect the entire dashboard */}
                <DashboardLayout /> {/* This component will render child routes */}
              </PrivateRoute>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="admin-members" element={<AdminMembersPage />} /> {/* 'members' is relative to '/dashboard' */}
          </Route>

          <Route path='/members' element={<MembersPage />} />
          <Route path='/electives' element={<ElectivesPage />} />
          <Route path='/conference' element={<ConferencePage />} />
          <Route path="*" element={<h2 style={{textAlign: 'center', marginTop: '50px'}}>404 - Page Not Found</h2>} />
        </Routes>

        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;