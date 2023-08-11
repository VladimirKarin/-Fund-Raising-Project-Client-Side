import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import ShowMoreButton from './Buttons/ShowMore';

function IdeaCard(props) {
    const { idea } = props;

    // Null checks
    if (!idea) return null;

    const description = idea.description.slice(0, 150); // Limit length of the description here
    const altText = `picture of ${idea.header}`;
    const URL = 'https://fund-raising-project-server-side.azurewebsites.net/';
    const href = `${URL}ideas/${idea.id}`;

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
                        {description}
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
