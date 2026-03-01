import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ element }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin text-4xl">⚙</div>
                    <p className="text-gray-600 mt-2">Loading...</p>
                </div>
            </div>
        );
    }

    return user ? element : <Navigate to="/login" replace />;
};
