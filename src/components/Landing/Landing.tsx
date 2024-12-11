import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: 'center', padding: 4 }}>
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h3" gutterBottom>
          Enjoy $90 off your first box
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          Offer expires soon. Get started now!
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/login')}>
          <LoginIcon sx={{ marginRight: 1 }} /> Login
        </Button>
      </Box>

      <Typography variant="h4" sx={{ marginY: 4 }}>
        Recipes for any occasion
      </Typography>
      <Grid container spacing={2}>
        {[
          { title: 'Shrimp & Grits', description: 'Ready in 30 minutes', img: 'recipe1.png' },
          { title: 'Mushroom Stroganoff', description: 'Easy vegetarian dinner', img: 'recipe2.png' },
          { title: 'Vegan Bolognese', description: 'Hearty Italian classic', img: 'recipe3.png' },
          { title: 'Pork Tenderloin', description: 'Weeknight comfort food', img: 'recipe4.png' },
        ].map((recipe, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardMedia component="img" height="140" image={`/images/${recipe.img}`} alt={recipe.title} />
              <CardContent>
                <Typography variant="h6">{recipe.title}</Typography>
                <Typography variant="body2">{recipe.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ marginY: 4 }}>
        <Typography variant="h5">Why our customers love HomeChef</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', marginY: 2 }}>
          <Typography>4.6 Average Rating</Typography>
          <Typography>15M Meals Served</Typography>
          <Typography>5M+ App Downloads</Typography>
          <Typography>10M+ Social Followers</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
