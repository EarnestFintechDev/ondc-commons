import { Context } from "../context";
export declare class Track {
    context: Context;
    message: {
        order_id: string;
        callback_url: string;
    };
    constructor(context: Context, message: {
        order_id: string;
        callback_url: string;
    });
}
