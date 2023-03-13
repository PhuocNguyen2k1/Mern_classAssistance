import {Box, Card,CardContent,CardActions,Typography, Button, CardMedia} from '@mui/material'
import * as React from 'react';


export const classCard = () => {
    
    return (
        <Box width="300px">
            <Card>
                <CardMedia
                component='img'
                height='140'
                image='https://source.unsplash.com/random'
                alt='unsplash-image'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                    this.class.title
                    </Typography>
                    <Typography variant='body2' color='text.second'>
                    this.class.title this.class.title this.class.title this.class.title
                    this.class.title this.class.title
                    this.class.title this.class.title
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Join class</Button>
                </CardActions>
            </Card>
        </Box>
    );
}

