import { log } from "@smoke-trees/postgres-backend";
import { ContextProvider } from "@smoke-trees/smoke-context";
import fetch, { RequestInit } from "node-fetch";
export const internalRequest = async (url: string, method: string, body?: any, options?: RequestInit) => {
    log.debug("Looking for body in utility/fetchRequest.ts -> ", body);
    const context = ContextProvider.getContext()
    const option: RequestInit = {
        method: method,
        body: body,
        headers: {
            ...options?.headers,
            'bap-uri': context.values?.bap_uri
        } 
    };
    return await fetch(url, option)
        .then((response) => {
            log.debug(
                `Looking for response coming from ${url} after calling FetchRequest function, this function available in utility/fetchRequest.ts -> `,
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
