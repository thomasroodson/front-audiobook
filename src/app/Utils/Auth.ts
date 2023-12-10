import { APP_ROUTES } from "../route";

// Olha as rotas publicas e pirvadas

export const checkIsPublicRoute = (asPath: string) => {
  const appPublicRoutes = Object.values(APP_ROUTES.public);

  return appPublicRoutes.includes(asPath);
};
