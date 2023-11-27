import './App.css';
import {Navigate, Route,Routes } from 'react-router-dom';
import Menu from './Components/Menu';
import SignUp from './Components/SignUp';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
