import * as React from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { PropTypes } from '@mui/material';

const ShowMoreButton = ({ href }) => {
    return (
        <Link href={href} passHref>
            <Button variant="contained" color="primary" size="medium">
                Show More
            </Button>
        </Link>
    );
};

ShowMoreButton.propTypes = {
    href: PropTypes.string.isRequired,
};
export default ShowMoreButton;
