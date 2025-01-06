import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
} from "@mui/material";

export default function HomeChef() {
  return (
    <div>
      {/* Navbar */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            HomeChef
          </Typography>
          <Box>
            <Button color="inherit">Recipe</Button>
            <Button color="inherit">Menu</Button>
            <Button color="inherit">Dinner2Go</Button>
            <Button color="inherit">Wine</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('https://source.unsplash.com/featured/?food')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 400,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          padding: 2,
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
            zIndex: 1,
          }}
        />
        {/* Text Content */}
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Typography variant="h3" fontWeight="bold">
            Enjoy $90 off your first box
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            Offer expires soon. Get started now.
          </Typography>
          <Button variant="contained" color="error" sx={{ marginTop: 2 }}>
            Get started
          </Button>
        </Box>
      </Box>

      {/* Recipes Section */}
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          Recipes for any occasion
        </Typography>
        <Grid container spacing={2}>
          {[
            {
              title: "Shrimp & Grits",
              description: "Ready in 30 minutes",
              image: "https://source.unsplash.com/featured/?shrimp",
            },
            {
              title: "Mushroom Stroganoff",
              description: "Easy vegetarian dinner",
              image: "https://source.unsplash.com/featured/?mushroom",
            },
            {
              title: "Vegan Bolognese",
              description: "Hearty Italian classic",
              image: "https://source.unsplash.com/featured/?vegan",
            },
            {
              title: "Pork Tenderloin",
              description: "Weeknight comfort food",
              image: "https://source.unsplash.com/featured/?pork",
            },
          ].map((recipe, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={recipe.image}
                  alt={recipe.title}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {recipe.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {recipe.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Customers Love HomeChef Section */}
      <Container sx={{ marginTop: 6 }}>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          Why our customers love HomeChef
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {[
            { label: "4.6", sublabel: "Average rating" },
            { label: "15M", sublabel: "Meals served" },
            { label: "5M+", sublabel: "App downloads" },
            { label: "10M+", sublabel: "Social followers" },
          ].map((stat, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Box textAlign="center">
                <Typography variant="h4" fontWeight="bold">
                  {stat.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.sublabel}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Gallery Section */}
      <Container sx={{ marginTop: 6 }}>
        <Grid container spacing={2}>
          {[
            "https://source.unsplash.com/featured/?cooking",
            "https://source.unsplash.com/featured/?chef",
            "https://source.unsplash.com/featured/?kitchen",
          ].map((image, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <CardMedia
                component="img"
                height="200"
                image={image}
                alt={`Gallery image ${index + 1}`}
              />
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center" sx={{ mt: 4 }}>
          <Button variant="contained" color="error">
            Join HomeChef
          </Button>
        </Box>
      </Container>
    </div>
  );
}
