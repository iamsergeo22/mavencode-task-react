import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import Home from './pages/Dashboard/Home';
import DefaultLayout from './layout/DefaultLayout';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const isAuthRoute = pathname.startsWith('/auth');

  return loading ? (
    <Loader />
  ) : (
    <>
      {isAuthRoute ? (
        <Routes>
          <Route
            path="/auth/signin"
            element={
              <>
                <PageTitle title="Signin" />
                <SignIn />
              </>
            }
          />
        
        </Routes>
      ) : (
        <DefaultLayout>
         <Routes>
         <Route
              path="/"
              element={
               <>
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
               </>
              }
          
          />
         </Routes>
        </DefaultLayout>
      )}
    </>
  );
}

export default App;
