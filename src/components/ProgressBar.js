'use client';
import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';

const IdeasDonationProgressBar = ({ idea }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (idea.askedSum !== 0) {
            const calculatedProgress = (idea.totalSum / idea.askedSum) * 100;
            setProgress(calculatedProgress);
        } else {
            setProgress(0);
        }
    }, [idea.askedSum, idea.totalSum]);

    return (
        <LinearProgress
            variant="determinate"
            value={Math.min(progress, 100)} // Ensure the progress doesn't exceed 100%
        />
    );
};

IdeasDonationProgressBar.propTypes = {
    idea: PropTypes.shape({
        askedSum: PropTypes.number.isRequired, // Target amount
        totalSum: PropTypes.number.isRequired, // Cumulative donated amount
    }).isRequired,
};

export default IdeasDonationProgressBar;
