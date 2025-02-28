import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import'../assets/styles/Edit.css'
function EditService() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [price, setDescription] = useState('');

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedService = {
            id,
            title,
            price,
        };
        
        console.log(updatedService);
        navigate('/'); 
    };

    return (
        <div className="main">
            <h2>EditService</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Titale:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                  Price:
                    <input
                        value={price}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                <label>

                </label>
                <button type="submit">Edit</button>
            </form>
        </div>
    );
}

export default EditService;
