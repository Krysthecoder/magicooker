import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/Landing/Landing';
import Login from './components/Login/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
