import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Drawer, List, CssBaseline } from "@mui/material";
import { appBarItems, drawerItems } from "./menuItems";
import styles from "./styles";

export default function Header() {
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="secondary"
        style={styles.wrapper}
        elevation={0}
      >
        {appBarItems}
      </AppBar>
      <Drawer variant="permanent">
        <List style={styles.sidebar}>{drawerItems}</List>
      </Drawer>
    </>
  );
}
