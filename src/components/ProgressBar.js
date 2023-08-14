'use client';

import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

const IdeasDonationProgressBar = ({ idea }) => {
    const [progress, setProgress] = useState(0);

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
        <div className="progress-bar-container">
            {/* Total donated amount */}
            <Typography variant="body2" align="center">
                {`$${idea.totalDonationSum} Donated so far`}
            </Typography>

            {/* Progress percentage and goal */}
            <Typography variant="body2" align="center">
                {`${progress.toFixed(0)}% of $${idea.askedSum} goal`}
            </Typography>

            {/* Progress bar */}
            <LinearProgress
                variant="determinate"
                value={Math.min(progress, 100)}
            />

            {/* Contributors and remaining amount */}
            <Typography variant="body2" align="center">
                {`${contributors} contributors ${
                    remainingAmount > 0
                        ? `$${remainingAmount} to go`
                        : 'Goal reached'
                }`}
            </Typography>
        </div>
    );
};

export default IdeasDonationProgressBar;
