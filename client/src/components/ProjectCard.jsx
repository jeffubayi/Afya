import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Paper,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
  List,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiListItem from "@mui/material/ListItem";

const ListItem = styled(MuiListItem)(({ theme }) => ({
  color: "#6b3bab",
  border: "1px solid #d6d6d6",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "#6b3bab",
    color: "white",
    borderRadius: "5px",
    "& .MuiListItemText-root": {
      color: "white",
    },
  },
}));

export default function ProjectCard({ project }) {
  return (
    <List>
      <Paper elevation={0}>
        <ListItem key={project.id} button>
          <ListItemText primary={project.name} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </Paper>
    </List>
  );
}
