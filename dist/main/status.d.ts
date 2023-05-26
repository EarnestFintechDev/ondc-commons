import { Context } from "../context";
export declare class Status {
    context: Context;
    message: {
        order_id: string;
    };
    constructor(context: Context, message: {
        order_id: string;
    });
}
