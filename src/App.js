import './App.css';
import HomePage from './components/pages/HomePage';
import DealsPage from './components/pages/DealsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/pages/Layout';
import SignPage from './components/auth/SignPage';
import UserForm from './components/auth/UserForm';
import ProfilePage from './components/pages/ProfilePage';
import ProductPage from './components/pages/ProductPage';
import SingleProduct from './components/pages/SingleProduct';
import AboutUs from './components/pages/FooterPages/AboutUs';
import Contact from './components/pages/FooterPages/Contact';
import FAQ from './components/pages/FooterPages/FAQ';
import PrivacyPolicy from './components/pages/FooterPages/PrivacyPolicy';
import TOS from './components/pages/FooterPages/TOS';
import Check from './components/check';



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
          <Route path="product/:id" element={<ProductPage />} />

          <Route path="single-product/:id" element={<SingleProduct />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TOS />} />
          <Route path="check" element={<Check />} />






          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;