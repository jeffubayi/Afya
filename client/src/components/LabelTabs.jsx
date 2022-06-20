import React from "react";
import {
  Tabs,
  Tab,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import GrainIcon from "@mui/icons-material/Grain";
import Card from "@mui/material/Card";
import styles from "./styles";

export default function LabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Typography variant="body2" color="textSecondary" style={styles.head}>
        MONITERING PERIOD
      </Typography>
      <Grid container spacing={1} style={styles.tabs}>
        <Grid item xs={12} sm={6}>
          <Card>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              color="primary"
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="DAY" />
              <Tab label="WEEK" />
              <Tab label="MONTH" />
              <Tab label="YEAR" />
            </Tabs>
          </Card>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card>
            <List style={styles.list} component="nav" aria-label="contacts">
              <ListItem button>
                <ListItemIcon>
                  <GrainIcon style={styles.coloredText} />
                </ListItemIcon>
                <ListItemText
                  style={styles.coloredText}
                  primary="10 Dec 2019 - 10 jan 2020"
                />
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}