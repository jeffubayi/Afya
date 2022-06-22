import * as React from "react";
import AppBar from "@mui/material/AppBar";
import {  List,Paper } from "@mui/material";
import { appBarItems, drawerItems } from "./menuItems";
import styles from "./styles";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: "white",
    border:"none"
  },
}));

export default function Header() {
  return (
    <>
      <AppBar
        position="fixed"
        color="secondary"
        style={styles.wrapper}
        elevation={0}
      >
        {appBarItems}
      </AppBar>
      <Drawer variant="permanent" component={Paper} sx={{backgroundColor:"white"}}  >
        <List style={styles.sidebar}>{drawerItems}</List>
      </Drawer>
    </>
  );
}
