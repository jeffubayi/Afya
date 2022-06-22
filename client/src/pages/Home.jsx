import Clients from "../components/Clients";
import Projects from "../components/Projects";
import {
  Paper,
  Grid,
  Container,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import styles from "../components/styles";
import KeyIssues from "../components/KeyIssues";
import LabelTabs from "../components/LabelTabs";
import Card from "../components/Card";


export default function Home() {
  return (
    <>
      <Box
        component="main"
        sx={{
          backgroundColor: "#eeeeee",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Typography sx={{ mb: 1, fontSize: 23 }} variant="h6">
            Analytics
          </Typography>
          <Grid container spacing={1}>
            <Grid container xs={4} spacing={1}>
              <Grid item xs={12} lg={4}>
                <Paper style={styles.visits}>
                  <Projects />
                </Paper>
              </Grid>
            </Grid>

            <Grid container xs={8} spacing={1}>
              <Grid item xs={12}>
                <Paper style={styles.layout}>
                  <KeyIssues />{" "}
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper style={styles.layout}>
                  {" "}
                  <LabelTabs />{" "}
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Card />
              </Grid>
              <Grid item xs={12}>
                <Clients />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
