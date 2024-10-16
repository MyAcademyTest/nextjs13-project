import React, { memo } from "react";
import AdminPanelSpa from "@/spas/admin-panel";

type AdminPanelProps = {};

const AdminPanel = memo(({}: AdminPanelProps) => {
  return <AdminPanelSpa />;
});
AdminPanel.displayName = "AdminPanel";

export default AdminPanel;
