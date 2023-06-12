import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Header from '../components/header-components/Header';
import { SearchProvider } from '../contexts/SearchContext';

const AppRoutes = () => {
  return (
    <Router>
      <Header/>
      <SearchProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </SearchProvider>
    </Router>
  );
};

export default AppRoutes;
