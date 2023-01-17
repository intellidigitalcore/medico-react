import { Route, Routes } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Layout from './layout/Layout';
import About from './pages/about/About';
import DoctorDetails from './pages/doctorDetails/DoctorDetails';
import Home from './pages/home/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='doctors/:doctorId' element={<DoctorDetails/>} />
      </Route>
      <Route path='signup' element={<Signup/>} />
    </Routes>
  );
}

export default App;
