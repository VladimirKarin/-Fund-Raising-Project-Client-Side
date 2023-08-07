'use client';
import React, { useState } from 'react';
import { TextField } from '@mui/material';

const DonationForm = () => {
    const [sum, setSum] = useState('');
    const [name, setName] = useState('');

    const handleSumChange = (event) => {
        const input = event.target.value.replace(/[^0-9]/g, '');
        setSum(input);
    };

    const handleNameChange = (event) => {
        const input = event.target.value.replace(/[^A-Za-z ]/g, '');
        setName(input);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Form submitted with sum: ${sum} and name: ${name}`);

        setSum('');
        setName('');
    };

    return (
        <div className="form-container">
            <div className="form">
                <h1>Donation Form</h1>
                <form className="donation-form" onSubmit={handleSubmit}>
                    <TextField
                        label="Sum"
                        variant="outlined"
                        required
                        value={sum}
                        onChange={handleSumChange}
                    />
                    <TextField
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};
export default DonationForm;
