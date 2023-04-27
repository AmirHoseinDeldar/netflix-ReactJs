import Home from './components/Pages/Home';
import './App.scss';
import Login from './components/Pages/login/login';
import Register from './components/Pages/Register/Register';
import Watch from './components/Pages/watch/Watch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/watch' element={<Watch />} />
          <Route path='/register' element={<Register />} />
          <Route path='/register/:id' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Login/:id' element={<Login />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
