import { Cities as City } from "./city";
import { Address } from "./address";
import { Countries as Country } from "./country";
import { Descriptors as Descriptor } from "./descriptor";
import { Time } from "./time";
import { Circles as Circle } from "./circle";
export declare class Location {
    id?: string;
    descriptor?: Descriptor;
    gps?: string;
    address?: Address;
    station_code?: string;
    city?: City;
    country?: Country;
    circle?: Circle;
    polygon?: string;
    dspace?: string;
    time?: Time;
}
