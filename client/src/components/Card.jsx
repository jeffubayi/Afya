import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./styles";
import lineUp from "./assets/red.png";
import lineDown from "./assets/green.png";

const cardValues = [
  {
    id: "1",
    name: "Footfall",
    value: "13k",
    placeholder: "patients",
    number: "+0.2",
  },
  {
    id: "2",
    name: " Patient satisfaction ",
    value: "7.8",
    placeholder: "NPS",
    number: "-0.1",
  },
  {
    id: "3",
    name: "Revenue",
    value: "4.2M",
    placeholder: "Kenyan shillings",
    number: "+2.4",
  },
];

const MetricsCard = () => {
  return (
    <>
      {cardValues.length > 0 ? (
        <Grid container spacing={1}>
          {cardValues.map((project) => (
            <Grid item xs={4}>
              <Card style={styles.area} key={project.id}>
                <CardContent>
                  <Grid container spacing={3} style={styles.grid}>
                    <Grid item>
                      <Typography gutterBottom variant="subtitle2">
                        {project.name}
                      </Typography>
                      <Typography color="primary" style={styles.textOne}>
                        {project.value}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        src={project.number.startsWith("+") ? lineUp : lineDown}
                        alt="graph"
                        style={styles.img}
                      />
                    </Grid>
                  </Grid>

                  <Typography color="textSecondary" style={styles.textTwo}>
                    {project.placeholder}
                  </Typography>
                  <Box style={styles.patients}>
                    <ArrowDownwardIcon style={styles.iconGreen} />
                    <Typography style={styles.textTwo}>
                      {project.number}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <p>No values yet</p>
      )}
    </>
  );
};
export default MetricsCard;
