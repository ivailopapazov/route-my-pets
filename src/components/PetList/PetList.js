import { useEffect, useState } from "react";
import PetCard from "./PetCard";
import * as petService from '../../services/petService';

const PetList = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll()
            .then(result => {
                console.log(result);
                setPets(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <>
            {pets.length > 0
                ? (
                    <ul className="other-pets-list">
                        {pets.map(x => <PetCard key={x._id} pet={x} />)}
                    </ul>
                ) 
                : <p className="no-pets">No pets in database!</p>
            }
        </>
    );
}

export default PetList;