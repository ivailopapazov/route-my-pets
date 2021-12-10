import { useState, useEffect } from 'react';

import * as petService from '../../services/petService';
import { useAuthContext } from '../../contexts/AuthContext';

import PetList from '../PetList';

const MyPets = () => {
    const [pets, setPets] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        petService.getMyPets(user._id)
            .then(petResult => {
                setPets(petResult);
            });
    }, []);

    return (
        <section id="my-pets-page" className="my-pets">
            <h1>My Pets</h1>

            <PetList pets={pets} />
        </section>
    );
}

export default MyPets;