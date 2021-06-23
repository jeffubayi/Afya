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
        color: "white"
      }
    },
    "&:hover": {
      backgroundColor: "blue",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white"
      }
    },
    borderRadius:"5px",
  },
  selected: {},
})(ListItem);

function generate(element: React.ReactElement) {
  return [0, 1, 2, 3, 4, 5, 6].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function VisitList() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  return (
    <div>
      <Typography variant="body2" color="textSecondary" style={styles.header}>
        VISITS
      </Typography>
      <List>
        {generate(
          <Paper style={styles.views}>
            <MuiListItem
              button
              selected={selectedIndex === 1}
            >
              <div>
                1.
                {""}
              </div>

              <ListItemText primary="Mkuru kwa Njenga" />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <MoreVertIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </MuiListItem>
          </Paper>
        )}
      </List>
    </div>
  );
}
