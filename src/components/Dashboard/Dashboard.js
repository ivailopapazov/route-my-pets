import PetList from '../PetList';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>

            <section>
                <PetList />
            </section>
        </section>
        
    );
}

export default Dashboard;