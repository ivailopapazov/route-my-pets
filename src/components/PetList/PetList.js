import PetCard from "./PetCard";

const PetList = ({
    pets
}) => {
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