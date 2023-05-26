import { Documentation } from "@smoke-trees/postgres-backend"
import { Descriptors as Descriptor} from "./descriptor"
import { Price } from "./Price"


@Documentation.addSchema({ type:"object"})
export class AddOn{
    @Documentation.addField({ type:"string"})
    id!: string | null
// ID of the add-on. This follows the syntax {item.id}/add-on/{add-on unique id} for item specific add-on OR
@Documentation.addField({$ref:Documentation.getRef(Descriptor)})
descriptor: Descriptor
@Documentation.addField({$ref:Documentation.getRef(Price)})
price:	Price
constructor(id:string,descriptor: Descriptor,price:Price)
{
    this.id=id,
    this.descriptor= descriptor,
    this.price=price
}
}