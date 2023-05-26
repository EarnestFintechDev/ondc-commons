import { Context } from "../context";
import { Descriptors } from "../descriptor";
export declare class Cancel {
    context: Context;
    message: {
        order_id: string;
        cancellation_reason_id: string;
        descriptor: Descriptors;
    };
    constructor(context: Context, message: {
        order_id: string;
        cancellation_reason_id: string;
        descriptor: Descriptors;
    });
}
