import { Documentation } from "@smoke-trees/postgres-backend";
import { Descriptor } from "./common";

@Documentation.addSchema({ type: "object" })
export class Descriptors {
  /**
   * Describes the description of a real-world object.
   * @param {string} name - Name of the product.
   * @param {string} code - code type string.
   * @param {string} symbol - type string.
   * @param {string} short_desc - short description.
   * @param {string} long_desc - Long description.
   * @param {string} images - image of of the product in uri or data type.
   * @param {string} audio -  audio.
   * @param {string} d_render - 3d_render.
   * @param {string} Selected_reason -Selcted reason in id .
  */
  @Documentation.addField({ type: "string" })
  name?: string | null;
  @Documentation.addField({ type: "string" })
  code?: string | null;
  @Documentation.addField({ type: "string" })
  symbol?: string | null;
  @Documentation.addField({ type: "string" })
  short_desc?: string | null;
  @Documentation.addField({ type: "string" })
  long_desc?: string | null;
  @Documentation.addField({ type: "array", items:{} })
  images?: string | null;
  @Documentation.addField({ type: "string" })
  audio?: string | null;
  @Documentation.addField({ type: "string" })
  d_render?: string | null;
  constructor(
    name: string,
    code: string,
    symbol: string,
    short_desc: string,
    long_desc: string,
    images: string,
    audio: string,
    d_render: string
  ) {
    this.name = name;
    this.code = code;
    this.symbol = symbol;
    this.short_desc = short_desc;
    this.long_desc = long_desc;
    this.images = images;
    this.audio = audio;
    this.d_render = d_render;
  }
}
