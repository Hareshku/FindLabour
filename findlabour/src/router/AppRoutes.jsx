import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import JobDetails from '../pages/JobDetails';
import UserProfile from '../pages/UserProfile';
import HireWorker from '../pages/HireWorker';
import FindWork from '../pages/FindWork';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/job/:id" element={<MainLayout><JobDetails /></MainLayout>} />
        <Route path="/profile/:id" element={<MainLayout><UserProfile /></MainLayout>} />
        <Route path="/hire-worker" element={<MainLayout><HireWorker /></MainLayout>} />
        <Route path="/find-work" element={<MainLayout><FindWork /></MainLayout>} />
        <Route path="/worker/:id" element={<MainLayout><UserProfile /></MainLayout>} />
        <Route path="/work/:id" element={<MainLayout><JobDetails /></MainLayout>} />
        <Route path="/services" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/why-findlabour" element={<MainLayout><Home /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
