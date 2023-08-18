import { log } from "@smoke-trees/postgres-backend";
import { ContextProvider, fetch } from "@smoke-trees/smoke-context";
import { RequestInit } from "node-fetch";
export const internalRequest = async (url: string, method: string, body?: any, options?: RequestInit) => {
    log.debug("Looking for body in utility/fetchRequest.ts -> ", body);
    const context = ContextProvider.getContext()
    const option: RequestInit = {
        method: method,
        body: body,
        headers: {
            ...options?.headers,
            'ondc-bap-uri': context.values?.bap_uri,
            'ondc-domain': context.values?.domain,
            'ondc-action': context.values?.action,
            'ondc-protocol-version': context.values?.version,
            'ondc-bap-id': context.values?.bap_id,
            'ondc-transaction-id': context.values?.transaction_id,
            'ondc-message-id': context.values?.message_id,
            'ondc-timestamp': context.values?.timestamp,
            'ondc-ttl': context.values?.ttl,
            'ondc-location-city': context.values?.location_city,
            'ondc-location-country': context.values?.location_country
        }
    };
    return await fetch(url, undefined, option)
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
