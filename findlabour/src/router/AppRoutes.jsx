import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import UserProfile from '../pages/UserProfile';
import EditProfile from '../pages/EditProfile';
import HireWorker from '../pages/HireWorker';
import FindWork from '../pages/FindWork';
import WorkDetails from '../pages/WorkDetails';
import PostWork from '../pages/PostWork';
import Messages from '../pages/Messages';
import MyPosts from '../pages/MyPosts';
import MyApplications from '../pages/MyApplications';
import WriteReview from '../pages/WriteReview';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Worker & Work Routes */}
        <Route path="/hire-worker" element={<MainLayout><HireWorker /></MainLayout>} />
        <Route path="/find-work" element={<MainLayout><FindWork /></MainLayout>} />
        <Route path="/worker/:id" element={<MainLayout><UserProfile /></MainLayout>} />
        <Route path="/work/:id" element={<MainLayout><WorkDetails /></MainLayout>} />

        {/* User Routes */}
        <Route path="/profile" element={<MainLayout><UserProfile /></MainLayout>} />
        <Route path="/profile/:id" element={<MainLayout><UserProfile /></MainLayout>} />
        <Route path="/edit-profile" element={<MainLayout><EditProfile /></MainLayout>} />
        <Route path="/messages" element={<MainLayout><Messages /></MainLayout>} />

        {/* Customer Routes */}
        <Route path="/post-work" element={<MainLayout><PostWork /></MainLayout>} />
        <Route path="/my-posts" element={<MainLayout><MyPosts /></MainLayout>} />

        {/* Labor Routes */}
        <Route path="/my-applications" element={<MainLayout><MyApplications /></MainLayout>} />

        {/* Review */}
        <Route path="/review/:id" element={<MainLayout><WriteReview /></MainLayout>} />

        {/* Static Pages */}
        <Route path="/services" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/why-findlabour" element={<MainLayout><Home /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
