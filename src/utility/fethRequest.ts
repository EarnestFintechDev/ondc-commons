import { log } from "@smoke-trees/postgres-backend";
import fetch from "node-fetch";
import { getHeader } from "./Header";
export const FetchRequest = async (url: string, method:string, body: any) => {
  log.debug("Looking for body in utility/fetchRequest.ts -> ", body);

  const dummyBody = {
    context: {
      domain: "nic2004:52110",
      country: "IND",
      city: "std:080",
      action: "search",
      core_version: "1.0.0",
      bap_id: "buyer-app.ondc.org",
      bap_uri: "https://buyer-app.ondc.org/protocol/v1",
      transaction_id: "e594b216-7ea2-4ddd-baba-caf6074344b4",
      message_id: "cc468d26-71b2-4a08-b5f4-156843e98240",
      timestamp: "2022-11-16T08:27:05.022Z",
      ttl: "PT30S",
    },
    message: {
      intent: {
        item: { descriptor: { name: "milk" } },
        fulfillment: {
          type: "Delivery",
          end: { location: { gps: "12.96774,77.588913" } },
        },
        payment: {
          "@ondc/org/buyer_app_finder_fee_type": "Percent",
          "@ondc/org/buyer_app_finder_fee_amount": "3.0",
        },
      },
    },
  };
  const Header = await getHeader(body);    
  log.debug(
    "Looking for header after calling getHeader in utility/fetchRequest.ts -> ",
    "getHeader()",
    {Header}
  );
  const option:object = {
    method: method,
    headers: Header,
    body: JSON.stringify(body),
  };
  return await fetch(url, option)
    .then((response) => {
      log.debug(
        `Looking for response coming from ${url} after calling FetchRequest function, this function available in utility/fetchRequest.ts -> `,
       "node-fetch",
        {response}
      );
      return response.json();
    })
    .catch((err) => {
      log.error(
        `Error coming from ${url} after calling FetchRequest function, this function available in utility/fetchRequest.ts -> `,
        JSON.stringify(err)
      );
      return err;
    });
};
