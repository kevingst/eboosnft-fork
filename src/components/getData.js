import { cache } from "react";

const getZoraData = cache(async () => {
  const res = await fetch("https://api.zora.co/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query GetData {
            firstMints: tokens(
              sort: {sortKey: MINTED, sortDirection: ASC}
              where: {collectionAddresses: "0xa52863eef886b51182abfd8fb2a6bb96bbe92699"}
              pagination: {limit: 16}
            ) {
              nodes {
                token {
                  image {
                    url
                  }
                  tokenId
                  mintInfo {
                    price {
                      nativePrice {
                        decimal
                        currency {
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
        }
      `,
    }),
  });
  const json = await res.json();
  // console.log("res", json.data)
  return json.data;
});

export default getZoraData;
