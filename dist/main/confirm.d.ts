import { Context } from "../context";
import { Order } from "../order";
export declare class Confirm {
    context: Context;
    message: {
        order: Order;
    };
    constructor(context: Context, message: {
        order: Order;
    });
}
