import Cookie from "js-cookie";

// Verifica se tem o token

export const checkUSerAuthenticated = () => {
  const userToken = true;

  return !!userToken;
};
