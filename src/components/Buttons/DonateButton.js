import React from 'react';
import { Button } from '@mui/material';

const DonateButton = ({ handleSubmit }) => {
    return (
        <Button
            className="donate-button"
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
        >
            Donate
        </Button>
    );
};

export default DonateButton;
