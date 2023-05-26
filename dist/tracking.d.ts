export declare class Tracking {
    /**
      * Describes the tracking info of an object.
      * @param {string} status - ENUM [active, inactive]
      * @param {string} url - uri.
     */
    url: string;
    status: status;
}
declare enum status {
    active = 0,
    inactive = 1
}
export {};
