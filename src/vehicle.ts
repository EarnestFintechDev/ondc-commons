import { Documentation } from "@smoke-trees/postgres-backend";

@Documentation.addSchema({ type: "object" })
export class Vehicle {
  @Documentation.addField({ type: "string" })
  category!: string | null;
  @Documentation.addField({ type: "number" })
  capacity!: number;
  @Documentation.addField({ type: "string" })
  make!: string | null;
  @Documentation.addField({ type: "string" })
  model!: string | null;
  @Documentation.addField({ type: "string" })
  size!: string | null;
  @Documentation.addField({ type: "string" })
  variant!: string | null;
  @Documentation.addField({ type: "string" })
  color!: string | null;
  @Documentation.addField({ type: "string" })
  energy_type!: string | null;
  @Documentation.addField({ type: "string" })
  registration!: string | null;
}
