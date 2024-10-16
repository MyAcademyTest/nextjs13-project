import { useNavigate } from "react-router-dom";

export const useDashboardScene = () => {
  const navigate = useNavigate();
  return { navigate };
};
