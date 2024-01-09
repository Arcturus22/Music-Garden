import { backendUrl } from "./config";

export const makeUnauthenticatedPOSTRequest = async (route, body) => {
  //API call using fetch()- GET req by defualt
  const resp = await fetch( backendUrl + route, {
    method: "POST",
    headers: {
        "Content-Type":"application/json",
    },
    body: JSON.stringify(body),
  });
  const formattedResp = await resp.json();
  return formattedResp;
};
