import { Location as location } from "./common";
import { Cities as City } from "./city";
import { Address } from "./address";
import { Countries as Country } from "./country";
import { Descriptors as Descriptor } from "./descriptor";
import { Time } from "./time";
import { Documentation } from "@smoke-trees/postgres-backend";
import { Circles as Circle} from "./circle";

@Documentation.addSchema({ type: "string" })
export class Location {
  @Documentation.addField({ type: "string" })
  id?: string;
  @Documentation.addField({ $ref: Documentation.getRef(Descriptor) })
  descriptor?: Descriptor;
  @Documentation.addField({ type: "string" })
  gps?: string;
  // pattern: ^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$
  // Describes a gps coordinate

  address?: Address;
  @Documentation.addField({ type: "string" })
  station_code?: string;
  @Documentation.addField({ $ref: Documentation.getRef(City) })
  city?: City;
  @Documentation.addField({ $ref: Documentation.getRef(Country) })
  country?: Country;
  @Documentation.addField({ $ref: Documentation.getRef(Circle) })

  circle?: Circle;
  @Documentation.addField({ type: "string" })
  polygon?: string;
  @Documentation.addField({ type: "string" })
  dspace?: string;
  @Documentation.addField({ $ref: Documentation.getRef(Time) })
  time?: Time;
}
