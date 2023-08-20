'use client';
import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@mui/material';
import IdeaCardComponent from './IdeaCardComponent';

const IdeasContainer = ({ ideas }) => {
    const cardsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(0);
    const [resolvedIdeas, setResolvedIdeas] = useState([]);
    const [visibleIdeasSlice, setVisibleIdeasSlice] = useState([]);

    useEffect(() => {
        if (ideas instanceof Promise) {
            ideas.then((resolvedIdeas) => {
                setResolvedIdeas(resolvedIdeas);
            });
        } else {
            setResolvedIdeas(ideas);
        }
    }, [ideas]);

    useEffect(() => {
        if (resolvedIdeas.length > 0) {
            const startCardIndex = currentPage * cardsPerPage;
            const endCardIndex = startCardIndex + cardsPerPage;
            const visibleIdeasSlice = resolvedIdeas.slice(
                startCardIndex,
                endCardIndex
            );
            setVisibleIdeasSlice(visibleIdeasSlice);
        }
    }, [resolvedIdeas, currentPage]);

    const handleNextPage = () => {
        setCurrentPage((prevPage) =>
            Math.min(
                prevPage + 1,
                Math.ceil(resolvedIdeas.length / cardsPerPage) - 1
            )
        );
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    return (
        <div>
            <Grid container spacing={2}>
                {visibleIdeasSlice.map((idea) => (
                    <Grid item key={idea.id} xs={12} sm={6} md={4}>
                        <IdeaCardComponent idea={idea} />
                    </Grid>
                ))}
            </Grid>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Button
                    variant="outlined"
                    color="primary"
                    disabled={currentPage === 0}
                    onClick={handlePreviousPage}
                >
                    Previous
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    disabled={
                        currentPage ===
                        Math.ceil(resolvedIdeas.length / cardsPerPage) - 1
                    }
                    onClick={handleNextPage}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default IdeasContainer;
