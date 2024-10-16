import React from "react";
import dynamic from "next/dynamic";

const AdminPanelSpa = dynamic(
  () => import("./AppWrapper").then((module) => module.default),
  {
    ssr: false,
  },
);

export default AdminPanelSpa;
