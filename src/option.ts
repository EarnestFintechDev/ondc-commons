import { Descriptor } from "./common"

export class Option{
    /**
   * Intent of a user. Used for searching for services.
   * @param {string} id - uri.
   * @param {string} descriptor- Describes the description of a real-world object.
   */	
id!:	string
descriptor!:	Descriptor
}