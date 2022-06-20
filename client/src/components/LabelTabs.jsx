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
  ButtonGroup,
  Card 
} from "@mui/material";

import GrainIcon from "@mui/icons-material/Grain";
import MuiButton from "@mui/material/Button";
import styles from "./styles";
import { styled } from "@mui/material/styles";

const Button = styled(MuiButton)(({ theme }) => ({
  border: "1px solid #d6d6d6",
  borderRadius: "5px",
  color:"#6b778c",
  "&:hover": {
    border: "1px solid #6b3bab",
    borderRadius: "5px",
    color:"#6b3bab",
  },
}));

export default function LabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Typography
      variant="button"
        display="block"
        color="textSecondary"
        style={styles.head}>
        MONITERING PERIOD
      </Typography>
      <Grid container spacing={1} style={styles.tabs}>
        <Grid item xs={12} sm={6}>
          <ButtonGroup aria-label="outlined button group">
            <Button>DAY</Button>
            <Button>WEEK</Button>
            <Button>MONTH</Button>
            <Button>YEAR</Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card>
            <List style={styles.list} component="div" aria-label="contacts">
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
