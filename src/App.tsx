import './App.css';
import { University } from './example/components/university';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RequestVacation } from './pages/request-vacation.page';
import { NotFound } from './pages/not-found';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<University />} />
          <Route path="/request-vacation" element={<RequestVacation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
