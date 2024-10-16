import React, { memo } from "react";
import { useLoginScene } from "./index.hooks";
import { Box } from "@mui/material";

type LoginSceneProps = {};

export const LoginScene = memo(({}: LoginSceneProps) => {
  const {} = useLoginScene();

  return <Box> LoginScene</Box>;
});

LoginScene.displayName = "LoginScene";
