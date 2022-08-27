import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Components/Pages/LandingPage';
import Home from './Components/Pages/Home';
import Dashboard from './Components/Pages/Dashboard';
import Signin from './Components/Pages/Signin';
import Signup from './Components/Pages/Signup';
import Shop from './Components/Pages/Shop';
import Footer from './Components/Footer';

function App() {
  return (
      <Router>
        <Navbar />
         <Routes>
          <Route path="/" element={<LandingPage />}/>
          {/* <Route path="/home" element={<Home />}/> */}
          {/* <Route path="/dashboard" element={<Dashboard />}/> */}
          {/* <Route path="/signin" element={<Signin />}/> */}
          {/* <Route path="/signup" element={<Signup />}/> */}
          {/* <Route path="/shop" element={<Shop />}/> */}
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
