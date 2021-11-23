import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as petService from '../../services/petService';

const Create = () => {
    const navigate = useNavigate();
    const [ types, setTypes] = useState([]);
    const [ categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://softuni-custom-server.herokuapp.com/jsonstore/types')
            .then(res => res.json())
            .then(res => {
                let typesResult = Object.values(res);

                let categories = typesResult.reduce((a, x) => {
                    if (!a[x.category]) {
                        a[x.category] = [];
                    }

                    a[x.category].push(x);

                    return a;
                }, {});

                setCategories(categories);
                setTypes(typesResult);
            })
    }, [])

    const onPetCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let type = formData.get('type');

        petService.create({
            name,
            description,
            imageUrl,
            type,
        })
            .then(result => {
                navigate('/dashboard');
            })
    }

    const onCategoryChange = (e) => {
        setTypes(categories[e.target.value]);
    }

    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onPetCreate} method="POST">
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image" />
                        </span>
                    </p>


                    <p className="field">
                        <label htmlFor="category">Category</label>
                        <span className="input">
                            <select id="category" name="category" onChange={onCategoryChange}>
                                {Object.keys(categories).map(x => <option key={x} value={x}>{x}</option>)}
                            </select>
                        </span>
                    </p>

                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                {types.map(x => <option key={x._id} value={x._id}>{x.name}</option>)}
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Pet" />
                </fieldset>
            </form>
        </section>
    );
}

export default Create;