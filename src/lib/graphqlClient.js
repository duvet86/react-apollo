import { GRAPHQL_URL } from "lib/constants";

function graphQLFetcher({ query, variables = null }) {
  const jwtToken = localStorage.getItem("jwt_token");
  return fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwtToken}`
    },
    body: JSON.stringify({
      query,
      variables
    })
  });
}

export const makeRequet = async graphQLParams => {
  const tets = await graphQLFetcher(graphQLParams);
  console.log(tets);
  return tets.json();
};

export const getJwtTokenForLoggedUser = async () => {
  const query = `query getJwtToken {
      getJwtToken
    }`;
  return await makeRequet({ query });
};
