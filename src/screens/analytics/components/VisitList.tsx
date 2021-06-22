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
//icons
import MoreVertIcon from "@material-ui/icons/MoreVert";
//styles
import styles from "../../../css/styles";

function generate(element: React.ReactElement) {
  return [0, 1, 2, 3, 4, 5, 6].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function VisitList() {

  return (
    <div>
      <Typography variant="body2" color="textSecondary" style={styles.header}>
        VISITS
      </Typography>
      <List>
        {generate(
          <Paper style={styles.views}>
            <ListItem>
              <div>
                1.
                {""}
              </div>

              <ListItemText primary="Mkuru kwa Njenga" />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <MoreVertIcon style={styles.iconWhite} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Paper>
        )}
      </List>
    </div>
  );
}
