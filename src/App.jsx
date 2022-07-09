import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import PersonalExperiencePage from './pages/PersonalExperiencePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/personal-experience' element={<PersonalExperiencePage />} />
    </Routes>
  );
}

export default App;
