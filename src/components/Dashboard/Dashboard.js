import { Routes, Route, Link, Outlet } from 'react-router-dom';
import logo, { ReactComponent as Logo } from '../../logo.svg';
import './Dashboard.css';
import PetList from '../PetList';

const Dashboard = () => {
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>

            <nav>
                <Link to="types">Types</Link>
            </nav>

            <section>
                <Routes>
                    <Route path="/" element={<PetList />} />
                    <Route path="/types" element={<><p> Types ... </p></>} />
                </Routes>
            </section>

            {/* <img src={logo} className="logo" title="asdasda" alt="asdasd" /> */}
            <Logo className="logo" />
        </section>
        
    );
}

export default Dashboard;