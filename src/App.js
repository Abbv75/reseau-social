import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import Registration from './pages/Registration';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ProtectedRoute> <Home/></ProtectedRoute>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Registration/>} />
      </Routes>
    </div>
  );
}

export default App;
