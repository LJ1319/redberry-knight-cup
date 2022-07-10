import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import PersonalExperiencePage from './pages/PersonalExperiencePage';
import ChessExperiencePage from './pages/ChessExperiencePage';
import FinalPage from './pages/FinalPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/personal-experience' element={<PersonalExperiencePage />} />
      <Route path='/chess-experience' element={<ChessExperiencePage />} />
      <Route path='/complete' element={<FinalPage />} />
    </Routes>
  );
}

export default App;
