import { Documentation } from "@smoke-trees/postgres-backend";

@Documentation.addSchema({ type: 'object' })
export class Document {
  /**
   * Describes a document which can be sent as a url.
   * @param {string} url - uri.
   * @param {string} label - Label in string.
   */
  @Documentation.addField({ type: 'string' })
  url: string;
  @Documentation.addField({ type: 'string' })
  label: string;
  constructor(url: string, label: string)
  {
       this.url = url;
       this.label= label;
  }
}
