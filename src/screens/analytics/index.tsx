import React from "react";
import { Drawer, AppBar, CssBaseline, List } from "@material-ui/core";
import { appBarItems, drawerItems } from "../../components/menuItems";

export default function index() {
  return (
    <div>
      <CssBaseline />
      <AppBar position="absolute" color="secondary" elevation={0}>
        {appBarItems}
      </AppBar>

      <Drawer variant="permanent">
        <List>{drawerItems}</List>
      </Drawer>

      <main>
        <h1>Analytics</h1>
      </main>
    </div>
  );
}
