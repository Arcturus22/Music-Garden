import { backendUrl } from "./config";

export const makeUnauthenticatedPOSTRequest = async (route, body) => {
  //API call using fetch()- GET req by defualt
  const resp = await fetch(backendUrl + route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const formattedResp = await resp.json();
  return formattedResp;
};

export const makeAuthenticatedPOSTRequest = async (route, body) => {
  //useCookies being used in a function is not suggestive- works in a component
  //Had this been in a component, we could use that useCookies
  //Cookies are stored in document.cookies object
  const token = getToken();

  const resp = await fetch(backendUrl + route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
  const formattedResp = await resp.json();
  return formattedResp;
};

const getToken = () => {
  const accessToken = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  return accessToken;
};
