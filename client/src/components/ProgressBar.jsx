import React from "react";
//component
import { LinearProgress, Typography } from "@mui/material";
//styles
import styles from "./styles";

export default function ProgressBar() {
  return (
    <div >
      <LinearProgress
        style={styles.progressBar}
        variant="determinate"
        value={50}
      />
      <Typography style={styles.greyText} variant="body2">
        24k/24k patients seen
      </Typography>
    </div>
  );
}