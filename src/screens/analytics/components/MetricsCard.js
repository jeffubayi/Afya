import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDropDown';
import styles from "../../../css/styles";
import PropTypes from 'prop-types'


const MetricsCard = ({title,caption,amount,percentage,graph}) => (
  <Card style={styles.area}>
    <CardContent>
      <Grid container spacing={3} style={styles.grid}>
        <Grid item>
          <Typography gutterBottom variant="subtitle1">
            {title}
          </Typography>
          <Typography color="primary" style={styles.textOne}>
            {amount}
          </Typography>
        </Grid>
        <Grid item>
          <img src={graph} alt="graph" style={styles.img} />
        </Grid>
      </Grid>

      <Typography color="textSecondary" style={styles.textTwo}>
        {caption}
      </Typography>
      <Box style={styles.patients}>
        <ArrowDownwardIcon style={styles.iconGreen} />
        <Typography style={styles.textTwo}>{percentage}%</Typography>
      </Box>
    </CardContent>
  </Card>
);
MetricsCard.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  graph: PropTypes.string.isRequired,
};
export default MetricsCard;
