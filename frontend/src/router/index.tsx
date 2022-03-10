import Home from '../views/Home';
import Login from '../views/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

const Router = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
)};

export default Router;
