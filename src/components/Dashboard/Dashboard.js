const Dashboard = () => {
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <ul className="other-pets-list">
                <li className="otherPet">
                    <h3>Name: Buddy</h3>
                    <p>Type: dog</p>
                    <p className="img"><img src="/images/dog2.png" /></p>
                    <a className="button" href="#">Details</a>
                </li>

                <li className="otherPet">
                    <h3>Name: Tyson</h3>
                    <p>Type: parrot</p>
                    <p className="img"><img src="/images/parrot.png" /></p>
                    <a className="button" href="#">Details</a>
                </li>

                <li className="otherPet">
                    <h3>Name: Milo</h3>
                    <p>Type: dog</p>
                    <p className="img"><img src="/images/dog.png" /></p>
                    <a className="button" href="#">Details</a>
                </li>

                <li className="otherPet">
                    <h3>Name: Tom</h3>
                    <p>Type: cat</p>
                    <p className="img"><img src="/images/cat1.png" /></p>
                    <a className="button" href="#">Details</a>
                </li>
            </ul>
            <p className="no-pets">No pets in database!</p>
        </section>
    );
}

export default Dashboard;