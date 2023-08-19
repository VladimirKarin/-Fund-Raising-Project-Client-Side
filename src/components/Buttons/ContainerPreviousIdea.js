import React from 'react';
import { Button } from '@mui/material';

const ContainerPreviousIdea = (onClick, disabled) => {
    return (
        <Button
            variant="outlined"
            color="primary"
            disabled={disabled}
            onClick={onClick}
        >
            Previous
        </Button>
    );
};

export default ContainerPreviousIdea;
