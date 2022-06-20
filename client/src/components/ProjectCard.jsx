import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Paper,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
  ListItem,
  List,
} from "@mui/material";

export default function ProjectCard({ project }) {
  return (
    // <div className='col-md-6'>
    //   <div className='card mb-3'>
    //     <div className='card-body'>
    //       <div className='d-flex justify-content-between align-items-center'>
    //         <h5 className='card-title'>{project.name}</h5>

    //         <a className='btn btn-light' href={`/projects/${project.id}`}>
    //           View
    //         </a>
    //       </div>
    //       <p className='small'>
    //         Status: <strong>{project.status}</strong>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <a className='anchor' href={`/projects/${project.id}`}>
      <List>
        <Paper>
          <ListItem key={project.id} button>
            <ListItemText className='text' primary={project.name} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <MoreVertIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Paper>
      </List>
    </a>
  );
}
