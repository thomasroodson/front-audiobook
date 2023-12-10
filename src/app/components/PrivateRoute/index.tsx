import { redirect, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

import { APP_ROUTES } from "@/app/route";
import { checkUSerAuthenticated } from "@/app/Utils/CheckUserAuthenticated";

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isUserAuthenticated = checkUSerAuthenticated();

  return (
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  );
};

export default PrivateRoute;
