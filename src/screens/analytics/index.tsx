import React from "react";
import {
  Drawer,
  AppBar,
  CssBaseline,
  List,
  Paper,
  Grid,
} from "@material-ui/core";
import { appBarItems, drawerItems } from "../../components/menuItems";
//components
import Card from "./components/MetricsCard";
import VisitList from "./components/VisitList";
import StaffList from "./components/StaffList";
import LabelTabs from "./components/LabelTabs";
import KeyIssues from "./components/KeyIssues";
//styles
import styles from "../../css/styles";

export default function index() {
  return (
    <div style={styles.body}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="secondary"
        style={styles.wrapper}
        elevation={0}
      >
        {appBarItems}
      </AppBar>
      <Drawer variant="permanent">
        <List>{drawerItems}</List>
      </Drawer>
      <div>
        <h1>Analytics</h1>
        <Grid container spacing={1}>
          <Grid container xs={4} spacing={1}>
            <Grid item xs={4}>
              <Paper style={styles.visits}>
                <VisitList />
              </Paper>
            </Grid>
          </Grid>

          <Grid container xs={8} spacing={3}>
            <Grid item xs={12}>
              <Paper style={styles.layout}>
                <KeyIssues />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={styles.layout}>
                <LabelTabs />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Card />
            </Grid>
            <Grid item xs={12}>
              <StaffList />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
