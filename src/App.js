import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext'
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import MyPets from './components/MyPets';
import Create from './components/Create';
import Edit from './components/Edit';
import Details from './components/Details';
import Notification from './components/Common/Notification';
import ErrorBoundary from './components/Common/ErrorBoundary';
import PrivateRoute from './components/Common/PrivateRoute';
import GuardedRoute from './components/Common/GuardedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <NotificationProvider>
          <div id="container">
            <Header />

            <Notification />

            <main id="site-content">
              <Routes>
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<Register />} />
                <Route path="/my-pets" element={<PrivateRoute><MyPets /></PrivateRoute>} />
                <Route path="/details/:petId" element={<Details />} />

                <Route element={<GuardedRoute />}>
                  <Route path="/create" element={<Create />} />
                  <Route path="/edit/:petId" element={<Edit />} />
                </Route>
              </Routes>
            </main>

            <footer id="site-footer">
              <p>@PetMyPet</p>
            </footer>
          </div>
        </NotificationProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
