import { Documentation } from "@smoke-trees/postgres-backend";

@Documentation.addSchema({ type: "object" })
export class Address {
  /**
   * Create Address.
   * @param {string} door - Door / Shop number of the address.
   * @param {string} building - Name of the building or block.
   * @param {string} street - Name of address if applicable. Example, shop name.
   * @param {string} name - Street name or number.
   * @param {string} locality - Name of the locality, apartments.
   * @param {string} ward - Name or number of the ward if applicable.
   * @param {string} state -  State name.
   * @param {string} country - Country name.
   * @param {string} area_code - This can be Pincode, ZIP code or any equivalent.
   * @param {string} country - Country name.
   */
  @Documentation.addField({ type: "string" })
  door!: string | null;
  @Documentation.addField({ type: "string" })
  name!: string | null;
  @Documentation.addField({ type: "string" })
  building!: string | null;
  @Documentation.addField({ type: "string" })
  street!: string | null;
  @Documentation.addField({ type: "string" })
  locality!: string | null;
  @Documentation.addField({ type: "string" })
  ward!: string | null;
  @Documentation.addField({ type: "string" })
  city!: string | null;
  @Documentation.addField({ type: "string" })
  state!: string | null;
  @Documentation.addField({ type: "string" })
  country!: string | null;
  @Documentation.addField({ type: "string" })
  area_code!: string | null;
  constructor(
    name: string,
    city: string,
    state: string,
    ward: string,
    country: string,
    area_code: string,
    locality: string,
    street: string,
    building: string
  ) {
    this.name = name;
    this.city = city;
    this.state = state;
    this.ward = ward;
    this.country = country;
    this.area_code = area_code;
    this.locality = locality;
    this.street = street;
    this.building = building;
  }
}
