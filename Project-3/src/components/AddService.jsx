import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Add.css';

function AddService() {
    const [newPost, setNewPost] = useState({
        title: '',
        name: '', 
        phoneNumber: '',
        email: '',
      
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Handle changes to form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPost((prevPost) => ({
            ...prevPost,
            [name]: value,
        }));
    };
    const cleanString = (str) => {
        return str.trim().replace(/\s+/g, ' ');
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Cleaning data from extra spaces
        const cleanedPost = {
            title: cleanString(newPost.title),
            name: cleanString(newPost.name),
            phoneNumber: cleanString(newPost.phoneNumber), 
            email: cleanString(newPost.email),
            
        };
        // Check if required fields are filled
        if (!cleanedPost.title || !cleanedPost.name || !cleanedPost.phoneNumber) {
            setError('Please fill in all the required fields.');
            return;
        }
        if (cleanedPost.title.length < 4) {
            setError('The title length must be more than 4 characters.');
            return;
        }
        console.log('New Service:', cleanedPost);
        
        navigate('/');
    };

    return (
        <div className="main">
            <div className="create-service">
                <h2>Create a New Appointment</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={newPost.title}
                            onChange={handleChange}
                            required
                        />
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={newPost.name}
                            onChange={handleChange}
                            required
                        />
                    
                        <label>PhoneNumber:</label>
                        <input
                            name="phoneNumber"
                            value={newPost.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                        <label>Email (optional):</label>
                        <input
                            type="text"
                            name="email"
                            value={newPost.email}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Add Appointment</button>
                </form>
            </div>
        </div>
    );
}

export default AddService;