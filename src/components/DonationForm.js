'use client';
import React, { useState } from 'react';
import { styled } from '@mui/system';
import { createDonation } from '@/data/donations';
import { Form } from '../components/Form';

const FormContainer = styled('div')({});
const RootContainer = styled('div')({});

const DonationForm = (props) => {
    const { ideaId, userId } = props;
    const [sum, setSum] = useState(0);
    const [name, setName] = useState('');

    const handleSumChange = (event) => {
        const input = event.target.value.replace(/[^0-9]/g, '');
        setSum(input);
    };

    const handleNameChange = (event) => {
        const input = event.target.value.replace(/[^A-Za-z ]/g, '');
        setName(input);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const donationData = userId
                ? await createDonation(ideaId, userId, Number(sum))
                : await createDonation(ideaId, name, Number(sum));

            setSum('');
            setName('');
        } catch (error) {
            console.error('Error creating donation:', error);
        }
    };

    return (
        <RootContainer className="root-container">
            <FormContainer className="donation-form-wrapper">
                <h1>Donation Form</h1>
                <Form
                    sum={sum}
                    name={name}
                    handleSumChange={handleSumChange}
                    handleNameChange={handleNameChange}
                />
                <ButtonComponent handleSubmit={handleSubmit} />
            </FormContainer>
        </RootContainer>
    );
};

export default DonationForm;
