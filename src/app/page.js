import DonationForm from '@/components/DonationForm';
import DonateButton from '@/components/Buttons/DonateButton';

import React from 'react';
import '../styles/styles.css';
import { LinearProgress } from '@mui/material';
import IdeasDonationProgressBar from '@/components/ProgressBar';

const idea = {
    id: 'b8f40262-d265-419d-a769-e0299901b73b',
    picture: './img/default_idea.png',
    header: 'HEADER Nr. 1',
    description: 'DESCRIPTION Nr. 1',
    askedSum: 2500,
    userId: '6fba75be-1f13-449e-b8ee-0d9287d70208',
    status: 'pending',
    totalSum: 2000,
};
const HomePage = () => {
    return (
        <div>
            <h1>Fund-Raising-Project Client Side</h1>
            {/* <DonationForm
                ideaId="b8f40262-d265-419d-a769-e0299901b73b"
                userId="6fba75be-1f13-449e-b8ee-0d9287d70208"
            /> */}
            <IdeasDonationProgressBar idea={idea} />
        </div>
    );
};

export default HomePage;
