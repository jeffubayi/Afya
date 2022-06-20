import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid from "@mui/material/Grid";
import MuiPaper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import styles from "./styles";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import Spinner from "./Spinner";
import { styled } from "@mui/material/styles";

const Paper = styled(MuiPaper)(({ theme }) => ({
  border: "1px solid #d6d6d6",
  borderRadius: "5px",
  "&:hover": {
    border: "1px solid #6b3bab",
    borderRadius: "5px",
  },
}));

const KeyIssues = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;
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
      {data.projects.length > 0 ? (
        <Grid container>
          {data.projects.slice(0, 6).map((project) => (
            <Grid item lg={4}>
              <a className='anchor' href={`/projects/${project.id}`}>
              <Paper style={styles.content} elevation={0}>
                <List style={styles.key} key={project.id}>
                  <ListItem key={1}>
                    <ListItemText
                      primary={project.description}
                      secondary={project.name}
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <MoreVertIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </Paper>
              </a>
            </Grid>
          ))}
        </Grid>
      ) : (
        <p>No Key issues</p>
      )}
    </div>
  );
};
export default KeyIssues;
