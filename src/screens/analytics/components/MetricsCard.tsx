import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDropDown";
import styles from "../../../css/styles";
import { gql, useQuery } from "@apollo/client";
import lineUp from "../../../css/assests/red.png";
import lineDown from "../../../css/assests/green.png";
//query
const GET_METRICS = gql`
  query {
    getAllMetrics {
      id
      title
      amount
      percentage
      caption
    }
  }
`;

const MetricsCard: React.FC = () => {
  const { data, loading, error } = useQuery(GET_METRICS);

  if (loading) return <p>loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  const card = data.getAllMetrics;
  
  return (
    <Grid container spacing={4}>
      {card.map((stat) => (
        <Grid item xs={4}>
          <Card style={styles.area}>
            <CardContent>
              <Grid container spacing={3} style={styles.grid}>
                <Grid item>
                  <Typography gutterBottom variant="subtitle1">
                    {stat.title}
                  </Typography>
                  <Typography color="primary" style={styles.textOne}>
                    {stat.amount}
                  </Typography>
                </Grid>
                <Grid item>
                  <img src={stat.amount > 41 ? lineUp : lineDown} alt="graph" style={styles.img} />
                </Grid>
              </Grid>

              <Typography color="textSecondary" style={styles.textTwo}>
                {stat.caption}
              </Typography>
              <Box style={styles.patients}>
                <ArrowDownwardIcon style={styles.iconGreen} />
                <Typography style={styles.textTwo}>
                  {stat.percentage}%
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default MetricsCard;
