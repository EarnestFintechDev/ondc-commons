import { Context } from "../context";
import { Intent } from "../intent";
export declare class Search {
    context: Context;
    message: {
        intent: Intent;
    };
    constructor(context: Context, message: {
        intent: Intent;
    });
}
