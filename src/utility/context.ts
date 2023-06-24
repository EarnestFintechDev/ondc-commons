import { ContextProvider } from "@smoke-trees/smoke-context";
import { Action, Context } from "../context";


export function getContext(): Context {
  const values = ContextProvider.getContext().values
  if (!values) {
    throw new Error("Error in getting the context")
  }

  const context = new Context(
    values.ttl,
    {
      city: { code: values.location_city },
      country: { code: values.location_country }
    },
    values.timestamp,
    values.message_id,
    values.transaction_id,
    values.bpp_uri ?? process.env['BPP_URI'] ?? 'https://ondc.vistar.solutions/v1/bpp',
    values.bpp_id ?? process.env['BPP_ID'] ?? 'ondc.vistar.solutions',
    values.version,
    values.action as Action,
    values.domain,
    values.bap_id,
    values.bap_uri
  )
  return context
}