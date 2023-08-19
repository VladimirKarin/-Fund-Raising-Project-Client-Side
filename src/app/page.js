import React from 'react';
import { Typography } from '@mui/material';
import '../styles/styles.css';
import { getIdeas } from '@/data/ideas';
import IdeasContainer from '@/components/IdeasContainer';

const HomePage = () => {
    const ideas = getIdeas();

    return (
        <div>
            <Typography variant="h4" align="center">
                Random Idea Cards
            </Typography>
            <IdeasContainer ideas={ideas} />
        </div>
    );
};

export default HomePage;
