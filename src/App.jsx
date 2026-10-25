import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Completed } from './pages/Completed';
import { TaskDetails } from './pages/TaskDetails'; 
import './App.css';

export function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/completadas" element={<Completed />} />
            <Route path="/editar/:id" element={<TaskDetails />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;