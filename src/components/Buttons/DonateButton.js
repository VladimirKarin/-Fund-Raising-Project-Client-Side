import React from 'react';
import { Button } from '@mui/material';

const DonateButton = ({ handleSubmit }) => {
    return (
        <Button
            className="submit-btn"
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
        >
            Submit
        </Button>
    );
};

export default DonateButton;
