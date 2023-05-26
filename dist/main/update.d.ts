import { Context } from "../context";
import { Order } from "../order";
export declare class Update {
    context: Context;
    message: {
        update_target: string;
        order: Order;
    };
    constructor(context: Context, message: {
        update_target: string;
        order: Order;
    });
}
