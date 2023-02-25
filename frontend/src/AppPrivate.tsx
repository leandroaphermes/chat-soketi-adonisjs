import { Navigate, useLocation } from "react-router-dom";

import AppLayout from "components/AppLayout";

import useSession from "hooks/useSession";

export default function AppPrivate() {
  const location = useLocation();
  const session = useSession();

  if (!session.isLogin) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return <AppLayout />;
}
