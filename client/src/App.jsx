import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import logo from "./assets/images/logo.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import "./index.css";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar
        position="static"
        color="inherit"
        sx={{
          borderRadius: "15px",
          margin: "30px 0",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          padding: "10px 50px",
        }}
      >
        <Typography
          variant="h2"
          align="center"
          color="primary"
          fontSize={50}
          fontWeight="300"
        >
          Memories
        </Typography>
        <img className="logo-image" src={logo} alt="memories" height={60} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
