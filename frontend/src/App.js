
import { Route, Routes } from 'react-router';

import Login from "./pages/auth/login"
import Register from './pages/auth/register';
import Home from './pages/user/Home';
function App() {
  return (
    <div className="App">
      <Routes>

      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
