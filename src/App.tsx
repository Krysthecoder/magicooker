import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/Landing/Landing';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default App;
