import { Descriptors as Descriptor } from "./descriptor";
import { Price } from "./Price";
export declare class AddOn {
    id: string | null;
    descriptor: Descriptor;
    price: Price;
    constructor(id: string, descriptor: Descriptor, price: Price);
}
