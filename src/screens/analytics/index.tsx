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
import lineUp from "../../css/assests/red.png";
import lineDown from "../../css/assests/green.png";

export default function index() {
  return (
    <div style={styles.body}>
      <CssBaseline />
      <AppBar position="absolute" color="secondary" style={styles.wrapper} elevation={0}>
        {appBarItems}
      </AppBar>
      <Drawer variant="permanent" >
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
            <Grid item xs={4}>
              <Card title="Footfall" amount={4.8} caption="patients" percentage={0.2} graph={lineUp} />
            </Grid>
            <Grid item xs={4}>
              <Card title="Patient Satisfaction" amount={13} caption="NPS" percentage={0.1} graph={lineDown}/>
            </Grid>
            <Grid item xs={4}>
              <Card title="Revenue" amount={4.2} caption="kenyan shillings" percentage={2.4} graph={lineUp} />
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
