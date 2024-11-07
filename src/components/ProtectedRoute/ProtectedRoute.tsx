import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const isAuthenticated = () => {
  return localStorage.getItem('authToken') !== null;
};

const ProtectedRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/auth/signin');
    }
  }, [navigate]);

  if (!isAuthenticated()) {
    return null; 
  }

  return <>{children}</>;
};

export default ProtectedRoute;
