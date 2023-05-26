export declare class Descriptors {
    /**
     * Describes the description of a real-world object.
     * @param {string} name - Name of the product.
     * @param {string} code - code type string.
     * @param {string} symbol - type string.
     * @param {string} short_desc - short description.
     * @param {string} long_desc - Long description.
     * @param {string} images - image of of the product in uri or data type.
     * @param {string} audio -  audio.
     * @param {string} d_render - 3d_render.
     * @param {string} Selected_reason -Selcted reason in id .
    */
    name?: string | null;
    code?: string | null;
    symbol?: string | null;
    short_desc?: string | null;
    long_desc?: string | null;
    images?: string | null;
    audio?: string | null;
    d_render?: string | null;
    constructor(name: string, code: string, symbol: string, short_desc: string, long_desc: string, images: string, audio: string, d_render: string);
}
