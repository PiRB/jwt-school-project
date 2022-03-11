import Home from '../views/Home';
import Login from '../views/Login';
import LeftMenu from '../components/LeftMenu';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

const Router = () => {
  return (
  <BrowserRouter>
    <LeftMenu />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
)};

export default Router;
