import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Clients from './pages/Clients';
import CreateRestaurant from './pages/CreateRestaurant';
import Overview from './pages/Overview';
import Menus from './pages/Menus';
import Orders from './pages/Orders';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
        <Route path="/login" element={<LoginPage />}>
        </Route>
        <Route path="/signup" element={<SignUpPage />}>
        </Route>
        <Route path="/clients" element={<Clients />}>
        </Route>
        <Route path="/restaurant" element={<CreateRestaurant />}>
        </Route>
        <Route path="/overview" element={<Overview />}>
        </Route>
        <Route path="/menus" element={<Menus />}>
        </Route>
        <Route path="/orders" element={<Orders />}>
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}