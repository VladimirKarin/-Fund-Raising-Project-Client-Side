import DonationForm from '@/components/DonationForm';
import React from 'react';
import '../styles/styles.css';
const HomePage = () => {
    return (
        <div>
            {/* <h1>Welcome to the HomePage 5</h1> */}
            <DonationForm
                ideaId="b8f40262-d265-419d-a769-e0299901b73b"
                userId="6fba75be-1f13-449e-b8ee-0d9287d70208"
            />
        </div>
    );
};

export default HomePage;
