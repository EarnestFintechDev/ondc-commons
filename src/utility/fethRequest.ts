import { log } from "@smoke-trees/postgres-backend";
import fetch from "node-fetch";
import { getHeader } from "./Header";
export const FetchRequest = async (url: string, method:string, body: any) => {
  log.debug("Looking for body in utility/fetchRequest.ts -> ", body);
  body = JSON.stringify(body)
  const Header = await getHeader(body);    
  log.debug(
    "Looking for header after calling getHeader in utility/fetchRequest.ts -> ",
    "getHeader()",
    {Header}
  );
  const option:object = {
    method: method,
    headers: Header,
    body: body,
  };
  return await fetch(url, option)
    .then((response) => {
      log.debug(
        `Looking for response coming from ${url} after calling FetchRequest function, this function available in utility/fetchRequest.ts -> `,
       "node-fetch",
        {response}
      );
      response.text().then(data =>
      log.debug("Text output for response", "node-fetch", {data})
      )
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
