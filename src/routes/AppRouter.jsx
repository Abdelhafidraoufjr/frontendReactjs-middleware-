import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import AdminForm from '../pages/AdminForm';
import PostDetailPage from '../pages/PostDetailPage';




const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminForm />} />
            <Route path="/blog/:id" element={<PostDetailPage />} />
        </Routes>
    );
};

export default AppRouter;