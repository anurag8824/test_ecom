import './App.css';
import HomePage from './components/pages/HomePage';
import DealsPage from './components/pages/DealsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/pages/Layout';
import SignPage from './components/auth/SignPage';
import UserForm from './components/auth/UserForm';
import ProfilePage from './components/pages/ProfilePage';
import ProductPage from './components/pages/ProductPage';
import AdminPage from './components/adminpanel/AdminPage';
import DashBoard from './components/adminpanel/DashBoard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="deals" element={<DealsPage />} />
          <Route path="sign-in" element={<SignPage />} />
          <Route path="user-form" element={<UserForm />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="dashboard" element={<DashBoard />} />

          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;