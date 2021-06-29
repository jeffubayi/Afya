import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styles from "../../../css/styles";

const Item = () => {
  return (
    <Paper style={styles.content}>
      <List style={styles.key}>
        <ListItem>
          <ListItemText primary="Wrong Prescription" secondary="Kosovo" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Paper>
  );
};

const KeyIssues: React.FC = () => {
  const { data, loading, error } = useQuery(GET_STAFF);

  if (loading) return <p>loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  const rows = data.getAllStaff;
  return (
    <div>
      <Typography
        variant="button" display="block"
        color="textSecondary"
        style={styles.head}
      >
        Key issues
      </Typography>
      <Grid container spacing={3} >
        <Grid item xs>
          <Item />
        </Grid>
        <Grid item xs>
          <Item />
        </Grid>
        <Grid item xs>
          <Item />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item />
        </Grid>
        <Grid item xs>
          <Item />
        </Grid>
        <Grid item xs>
          <Item />
        </Grid>
      </Grid>
    </div>
  );
}
