import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import MyPets from './components/MyPets';
import Create from './components/Create';
import Edit from './components/Edit';
import Details from './components/Details';
import ErrorBoundary from './components/Common/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <div id="container">
          <Header />

          <main id="site-content">
            <Routes>
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Register />} />
              <Route path="/my-pets" element={<MyPets />} />
              <Route path="/create" element={<Create />} />
              <Route path="/edit/:petId" element={<Edit />} />
              <Route path="/details/:petId" element={<Details />} />
            </Routes>
          </main>

          <footer id="site-footer">
            <p>@PetMyPet</p>
          </footer>
        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
