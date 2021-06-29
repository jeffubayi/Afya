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
import { gql, useQuery } from "@apollo/client";

//query
const GET_ISSUES = gql`
  query {
    getAllIssues {
      id
      description
      city
    }
  }
`;

const KeyIssues: React.FC = () => {
  const { data, loading, error } = useQuery(GET_ISSUES);

  if (loading) return <p>loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  const major = data.getAllIssues;

  return (
    <div>
      <Typography
        variant="button"
        display="block"
        color="textSecondary"
        style={styles.head}
      >
        Key issues
      </Typography>

      <Grid container>
        {major.map((issue) => (
          <Grid item lg={4}>
            <Paper style={styles.content}>
              <List style={styles.key}>
                <ListItem key={issue.id}>
                  <ListItemText
                    primary={issue.description}
                    secondary={issue.city}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <MoreVertIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default KeyIssues;
