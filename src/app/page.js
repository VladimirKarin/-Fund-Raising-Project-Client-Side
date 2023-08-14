import React from 'react';
import '../styles/styles.css';
import IdeasDonationProgressBar from '@/components/ProgressBar';

const idea = {
    id: '70c8e131-ac49-453f-85f6-d18160b7be19',
    picture: './img/default_idea.png',
    header: 'Idea 1',
    description: 'Idea 1 Description 1 ',
    askedSum: 100,
    userId: '6fba75be-1f13-449e-b8ee-0d9287d70208',
    status: 'accepted',
    donations: [
        {
            id: 'd6667fd3-0182-4730-9f20-866602f87ff8',
            sum: 20,
            userId: '6fba75be-1f13-449e-b8ee-0d9287d70208',
            ideaId: '70c8e131-ac49-453f-85f6-d18160b7be19',
        },
        {
            id: '7a739df1-7629-4743-8387-0334af332692',
            sum: 10,
            userId: '6fba75be-1f13-449e-b8ee-0d9287d70208',
            ideaId: '70c8e131-ac49-453f-85f6-d18160b7be19',
        },
    ],
    totalDonationSum: 30,
};
const HomePage = () => {
    return (
        <div className="home-page">
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
