import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Registration from './pages/RegistrationPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/registration' element={<Registration />} />
    </Routes>
  );
}

export default App;
