/* eslint-disable react/prefer-stateless-function */
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import QuotePage from './pages/quote';
import Calc from './pages/calculator';
import Navigation from './component/navigation';

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/calculator" element={<Calc />} />
      <Route path="/quote" element={<QuotePage />} />
    </Routes>
  </>
);

export default App;
