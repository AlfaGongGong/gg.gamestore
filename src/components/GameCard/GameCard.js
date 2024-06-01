import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          sx={{ borderRadius: 2, border: '1px solid black', height: '140px', width: '100%', objectFit: 'cover' }}
          component="img"
          height="140px"
          image="https://dev.me/assets/images/og-image-01.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Game Name
          </Typography>
          <Typography variant="paragraph" color="text.secondary" allign='justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
          </Typography>
          <Typography variant='subtitle1' color='text.secondary' allign='center'>
            Price: $0.00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="outlined">
          More Info
        </Button>
        <Button size="small" color="primary" variant="contained">
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}
