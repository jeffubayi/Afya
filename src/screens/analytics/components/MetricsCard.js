import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import line from "../../../css/assests/graph.png";
import styles from "../../../css/styles";
import PropTypes from 'prop-types'


const MetricsCard = ({title,caption,amount}) => (
  <Card style={styles.area}>
    <CardContent>
      <Grid container spacing={3} style={styles.grid}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="h6">
            {title}
          </Typography>
          <Typography color="primary" variant="subtitle1">
            {amount}
          </Typography>
        </Grid>
        <Grid item>
          <img src={line} alt="graph" style={styles.img} />
        </Grid>
      </Grid>

      <Typography color="textSecondary" variant="caption">
        {caption}
      </Typography>
      <Box style={styles.patients}>
        <ArrowDownwardIcon style={styles.iconRed} />
        <Typography>12%</Typography>
      </Box>
    </CardContent>
  </Card>
);
MetricsCard.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
export default MetricsCard;
