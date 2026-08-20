import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ServiceCatalogue from './Service/ServiceCatalogue.jsx';
import ServiceManagement from './Service/ServiceManagement.jsx';

function App() {
  return (
      <BrowserRouter>
        <Routes>

          {/* Customer Service Catalogue */}
          <Route path="/services" element={<ServiceCatalogue />} />

          {/* Admin Service Management */}
          <Route
              path="/service-management"
              element={<ServiceManagement />}
          />

        </Routes>
      </BrowserRouter>
  );
import NavigationBar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Login from './pages/Login'
import EmployeeDashboard from './pages/EmployeeDashboard'
import BookAppointment from './pages/Appointment';
import Product from './pages/Product'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  
  return (
      <BrowserRouter>

            <NavigationBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
            </Routes>

            <Footer />

        </BrowserRouter>
  )
}

export default App;