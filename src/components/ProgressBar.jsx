'use client';
import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/system';

const ProgressBarContainer = styled('div')(({ theme }) => ({
    padding: '10px',
    fontSize: '12px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '16px',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '18px',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '28px',
    },
}));

const IdeasDonationProgressBar = ({ idea }) => {
    const [progress, setProgress] = useState(0);
    const theme = useTheme();

    useEffect(() => {
        if (idea.askedSum !== 0) {
            const calculatedProgress =
                (idea.totalDonationSum / idea.askedSum) * 100;
            setProgress(calculatedProgress);
        } else {
            setProgress(0);
        }
    }, [idea.askedSum, idea.totalDonationSum]);

    const contributors = idea.donations.length;
    const remainingAmount = idea.askedSum - idea.totalDonationSum;

    return (
        <ProgressBarContainer>
            <Typography variant="body2" align="left">
                {`Donated so far: $${idea.totalDonationSum} `}
            </Typography>

            <Typography variant="body2" align="left">
                {`Contributors: ${contributors} `}
            </Typography>

            <LinearProgress
                variant="determinate"
                value={Math.min(progress, 100)}
            />

            <Typography variant="body2" align="left">
                {`${progress.toFixed(0)}% of $${idea.askedSum} goal`}
            </Typography>

            <Typography variant="body2" align="left">
                {`Remaining: ${remainingAmount}$ `}
            </Typography>
        </ProgressBarContainer>
    );
};

export default IdeasDonationProgressBar;
