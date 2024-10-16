import React, { memo } from "react";
import { useDashboardScene } from "./index.hooks";
import { Box, Drawer, MenuItem, Paper, Stack } from "@mui/material";
import { Outlet } from "react-router";

type DashboardSceneProps = {};

export const DashboardScene = memo(({}: DashboardSceneProps) => {
  const { navigate } = useDashboardScene();

  return (
    <Stack direction="row">
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <MenuItem onClick={() => navigate("./products")}>Products</MenuItem>
        <MenuItem onClick={() => navigate("./users")}>Users</MenuItem>
      </Drawer>
      <Outlet />
    </Stack>
  );
});

DashboardScene.displayName = "DashboardScene";
