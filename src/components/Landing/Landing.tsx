import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid
} from "@mui/material";

import {
  Login as LoginIcon,
  StarHalf as StarHalfIcon,
  Restaurant as RestaurantIcon,
  GetApp as GetAppIcon,
  Share as ShareIcon,
} from "@mui/icons-material";
import Login from "../Login/Login";

const LandingPage = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const recipes = [
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
  ];

  const stats = [
    { Icon: StarHalfIcon, label: "4.6 Average Rating" },
    { Icon: RestaurantIcon, label: "15M Meals Served" },
    { Icon: GetAppIcon, label: "5M+ App Downloads" },
    { Icon: ShareIcon, label: "10M+ Social Followers" },
  ];

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
          onClick={handleOpen}
        >
          <LoginIcon sx={{ marginRight: 1 }} /> Login
        </Button>
      </Box>

      {/* Sign-in / Sign-up Modal */}
      {open && <Login onClose={handleClose} open={open} />}

      <Typography variant="h4" sx={{ marginY: 4 }}>
        Recipes for any occasion
      </Typography>

      <Grid container spacing={2}>
        {recipes.map(({ title, img, description }, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={`/images/${img}`}
                alt={title}
              />
              <CardContent>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2">{description}</Typography>
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
          <Grid container spacing={2} justifyContent="center">
            {stats.map(({ Icon, label }, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: "flex", justifyContent: "center" }}>
                <Typography sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                  <Icon sx={{ marginRight: 1 }} /> {label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
