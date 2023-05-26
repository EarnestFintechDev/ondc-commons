export class Tracking{
 /**
   * Describes the tracking info of an object.
   * @param {string} status - ENUM [active, inactive]
   * @param {string} url - uri.
  */
url!:	string
status!: status
}
enum status{
    active, inactive
}