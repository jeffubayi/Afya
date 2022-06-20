import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./styles";
import lineUp from "./assets/red.png";
import lineDown from "./assets/green.png";

const MetricsCard = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={4}>
        <Card style={styles.area}>
          <CardContent>
            <Grid container spacing={3} style={styles.grid}>
              <Grid item>
                <Typography gutterBottom variant="subtitle1">
                  name
                </Typography>
                <Typography color="primary" style={styles.textOne}>
                  name
                </Typography>
              </Grid>
              <Grid item>
                <img
                  src={20 > 41 ? lineUp : lineDown}
                  alt="graph"
                  style={styles.img}
                />
              </Grid>
            </Grid>

            <Typography color="textSecondary" style={styles.textTwo}>
              name
            </Typography>
            <Box style={styles.patients}>
              <ArrowDownwardIcon style={styles.iconGreen} />
              <Typography style={styles.textTwo}>1%</Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default MetricsCard;
