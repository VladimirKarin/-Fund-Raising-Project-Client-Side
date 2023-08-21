'use client';
import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import '../styles/styles.css';
import { getIdeas } from '@/data/ideas';
import IdeasContainer from '@/components/IdeasContainer';

const HomePage = () => {
    const [ideas, setIdeas] = useState([]);

    useEffect(() => {
        getIdeas().then((resolvedIdeas) => {
            setIdeas(resolvedIdeas);
        });
    }, []);

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
