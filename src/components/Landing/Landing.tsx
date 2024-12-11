import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import GetAppIcon from "@mui/icons-material/GetApp";
import ShareIcon from "@mui/icons-material/Share";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: "center", padding: 4 }}>
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h3" gutterBottom>
          Enjoy $90 off your first box
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          Offer expires soon. Get started now!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/login")}
        >
          <LoginIcon sx={{ marginRight: 1 }} /> Login
        </Button>
      </Box>

      <Typography variant="h4" sx={{ marginY: 4 }}>
        Recipes for any occasion
      </Typography>
      <Grid container spacing={2}>
        {[
          {
            title: "Shrimp & Grits",
            description: "Ready in 30 minutes",
            img: "Shrimp_&_Grits.jpg",
          },
          {
            title: "Mushroom Stroganoff",
            description: "Easy vegetarian dinner",
            img: "Mushroom_Stroganoff.jpg",
          },
          {
            title: "Vegan Bolognese",
            description: "Hearty Italian classic",
            img: "Vegan_Bolognese.jpg",
          },
          {
            title: "Pork Tenderloin",
            description: "Weeknight comfort food",
            img: "Pork_Tenderloin.jpg",
          },
        ].map((recipe, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={`/images/${recipe.img}`}
                alt={recipe.title}
              />
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
        <Box
          sx={{ display: "flex", justifyContent: "space-around", marginY: 2 }}
        >
          <Typography>
            <StarHalfIcon sx={{ marginRight: 1 }} /> 4.6 Average Rating
          </Typography>
          <Typography>
            <RestaurantIcon sx={{ marginRight: 1 }} /> 15M Meals Served
          </Typography>
          <Typography>
            <GetAppIcon sx={{ marginRight: 1 }} /> 5M+ App Downloads
          </Typography>
          <Typography>
            <ShareIcon sx={{ marginRight: 1 }} /> 10M+ Social Followers
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
