import { Ack } from "../ack";
import { Errors } from "../error";
export declare class RespondBack {
    message: {
        status: Ack;
        error: Errors | undefined;
    };
    constructor(message: {
        status: Ack;
        error: Errors | undefined;
    });
}
