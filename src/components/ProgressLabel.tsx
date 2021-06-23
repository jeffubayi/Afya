import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress, {
  LinearProgressProps,
} from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styles from "../css/styles";

export default function ProgressLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box display="flex" alignItems="center">
        <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress
          variant="determinate"
          style={styles.progressBar}
          {...props}
        />
      </Box>
    </Box>
  );
}
