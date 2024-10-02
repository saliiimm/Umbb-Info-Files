import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/HomeTemplate/Home';
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
