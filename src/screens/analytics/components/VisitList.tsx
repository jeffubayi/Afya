import React from "react";
//components
import {
  Paper,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
  ListItem,
  List,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
//icons
import MoreVertIcon from "@material-ui/icons/MoreVert";
//styles
import styles from "../../../css/styles";
import { gql, useQuery } from "@apollo/client";
//query
const GET_VISITS = gql`
  query {
    getAllVisits {
      id
      name
    }
  }
`;
//styles
const MuiListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "white",
      color: "#4615b2",
      "& .MuiListItemIcon-root": {
        color: "grey",
      },
    },
    "&$selected:hover": {
      backgroundColor: "#4615b2",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&:hover": {
      backgroundColor: "blue",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    borderRadius: "5px",
  },
  selected: {},
})(ListItem);

const VisitList: React.FC = () => {
  const [selectedIndex] = React.useState(1);
  const { data, loading, error } = useQuery(GET_VISITS);

  if (loading) return <p>loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  const visit = data.getAllVisits;

  return (
    <div>
      <Typography variant="body2" color="textSecondary" style={styles.header}>
        VISITS
      </Typography>
      <List>
        {visit.map((clinic: any) => (
          <Paper style={styles.views}>
            <MuiListItem key={clinic.id} button selected={selectedIndex === 1}>
              <div>{clinic.id}</div>
              <ListItemText style={styles.header} primary={clinic.name} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <MoreVertIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </MuiListItem>
          </Paper>
        ))}
      </List>
    </div>
  );
};
export default VisitList;
