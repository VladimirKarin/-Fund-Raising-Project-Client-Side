import React from 'react';
import { TextField, Box } from '@mui/material';

const FormComponent = ({ sum, name, handleSumChange, handleNameChange }) => {
    return (
        <form className="donation-form">
            <Box marginBottom={2}>
                <TextField
                    id="sum"
                    name="sum"
                    label="Sum"
                    variant="outlined"
                    required
                    value={sum}
                    onChange={handleSumChange}
                />
            </Box>
            <Box marginBottom={2}>
                <TextField
                    id="name"
                    name="name"
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={handleNameChange}
                />
            </Box>
        </form>
    );
};

export default FormComponent;
