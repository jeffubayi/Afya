import React from "react";
import { LinearProgress, Typography, Box } from "@mui/material";

export default function ProgressLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  );
}
