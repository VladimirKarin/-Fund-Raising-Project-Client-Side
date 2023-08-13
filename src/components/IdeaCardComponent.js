import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import ShowMoreButton from './Buttons/ShowMore';

function IdeaCard(props) {
    const { idea } = props;

    if (!idea) return null;

    function shortenDescription(idea) {
        if (idea.description.length > 150) {
            return idea.description.slice(0, 150) + '...';
        }
    }

    const limitedLengthDescroption = shortenDescription(idea);
    const altText = `picture of ${idea.header}`;
    const href = `${process.env.API_URL}ideas/${idea.id}`;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={idea.picture}
                    alt={altText}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {idea.header}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {limitedLengthDescroption}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <ShowMoreButton href={href} />{' '}
            </CardActions>
        </Card>
    );
}
export default IdeaCard;
