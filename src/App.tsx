import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/HomeTemplate/Home';
import HomePage from './pages/Home/HomePage';
import SemesterPage from './pages/Semester/SemesterPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/semester/" element={<Home />}>
        <Route index element={<SemesterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
