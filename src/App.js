import { Route, Routes } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Layout from './layout/Layout';
import About from './pages/about/About';
import DoctorDetails from './pages/doctorDetails/DoctorDetails';
import Home from './pages/home/Home';
import Signin from './pages/signin/Signin';
import Services from './pages/services/Services';
import Doctors from './pages/doctors/Doctors';
import Blog from './pages/blog/Blog';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='service' element={<Services/>} />
        <Route path='doctors' element={<Doctors/>} />
        <Route path='doctors/:doctorId' element={<DoctorDetails/>} />
        <Route path='blog' element={<Blog/>} />
      </Route>
      <Route path='signup' element={<Signup/>} />
      <Route path='login' element={<Signin/>} />
    </Routes>
  );
}

export default App;
