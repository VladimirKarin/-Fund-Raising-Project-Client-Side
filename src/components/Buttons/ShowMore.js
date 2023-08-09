import * as React from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';

const ShowMoreButton = ({ href }) => {
    return (
        <Link href={href} passHref>
            <Button variant="contained" color="primary" size="medium">
                Show More
            </Button>
        </Link>
    );
};
export default ShowMoreButton;
