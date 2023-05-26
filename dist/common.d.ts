import { Contacts } from "./contact";
export declare type Schedule = {
    /**
     * Describes a schedule.
     * @param {string} frequency- Describes duration as per ISO8601 format.
     * @param {string} holidays - date-time.
     * @param {string} times - date-time.
     */
    frequency: string | null;
    holidays: string[] | null;
    times: string[] | null;
};
export declare type Time = {
    /**
     * Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations.
     * @param {string} label - type string.
     * @param {string} timestamps -  date-time.
     * @param {string} duration - string.
     * @param {string} range - range type string.
     * @param {string} days - comma separated values representing days of the week.
     * @param {string} schedule - 	Describes a schedule.
     */
    label: string;
    timestamp: string;
    duration: string;
    range: {
        start: string;
        end: string;
    };
    days: string;
    schedule: Schedule;
};
export declare type Categories = {
    /**
     * Describe a category.
     * @param {string} id - Unique id of the category.
     * @param {string} parent_category_id - Category/properties/idstring.Unique id of the category
     * @param {string} descriptor - Describes the description of a real-world object.
     * @param {string} time - Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations.
     * @param {string} tags - 	Describes a tag. This is a simple key-value store which is used to contain extended metadata.
     */
    id: string | null;
    parent_category_id: string;
    descriptor: Descriptor | null;
    time: Time | null;
    tags: {};
};
export declare type Provider = {
    id: string;
    descriptor: Descriptor;
    category_id: string;
    time: Time;
    categories: [Categories];
    fulfillments: [Fulfillment];
    payments: [Payment];
    locations: [Location];
    offers: [Offers];
    items: [Item];
    exp: string;
    rateable: boolean;
    tags: {};
};
export declare type Descriptor = {
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
    name: string | null;
    code: string | null;
    symbol: string | null;
    short_desc: string | null;
    long_desc: string | null;
    images: string | null;
    audio: string | null;
    d_render: string | null;
};
export declare type Fulfillment = {
    /**
     * Describes the description of a real-world object.
     * @param {string} id -  Unique reference ID to the fulfillment of an .
     * @param {string} type - This describes the type of fulfillment.
     * @param {string} symbol -Provider/properties/idstring. Id of the provider.
     * @param {string} provider_id - short description.
     * @param {string} rating - Rating/properties/valuenumber. minimum: 0. Rating value given to the object.
     * @param {string} state - 	Describes a state.
     * @param {string} tracking -  Indicates whether the fulfillment allows tracking.
     * @param {string} customer - Describe a customer.
     * @param {string} agent -	Describes an  executor.
     * @param {string} person -	Describes a person.
     * @param {string} contact - Describes a contact .
     * @param {string} vehicle - Describes the properties of a vehicle used in a mobility service .
     * @param {string} start -Details on the start of fulfillment .
     * @param {string} end -Details on the end of fulfillment.
     * @param {string} rateable -If the entity can be rated or not.
     * @param {string} tags -	Describes a tag. This is a simple key-value store which is used to contain extended metadata .
     */
    id: string | null;
    type: string | null;
    provider_id: string | null;
    rating: number | 0;
    state: State;
    tracking: boolean | false;
    customer: {
        contact: Contact | null;
        person: Person | null;
    };
    agent: Agent | null;
    person: Person | null;
    contact: Contact | null;
    vehicle: Vehicle | null;
    start: {
        location: Location;
        time: Time;
        instructions: Descriptor;
        contact: Contact;
        person: Person;
        authorization: Authorization;
    };
    end: {
        location: Location;
        time: Time;
        instructions: Descriptor;
        contact: Contact;
        person: Person;
        authorization: Authorization;
    };
    rateable: boolean | null;
    tags: {};
};
export declare type Payment = {
    /**
    * Describes the description of a real-world object.
    * @param {string} uri -  A payment uri to be called by the Buyer App. If empty, then the payment is to be done offline. The details of payment should be present in the params object. If tl_method = http/get, then the payment details will be sent as url params. Two url param values, $transaction_id and $amount are mandatory. And example url would be : https://www.example.com/pay?txid=$transaction_id&amount=$amount&vpa=upiid&payee=shopez&billno=1234 .
    * @param {string} tl_method -  Enum:[ http/get, http/post, payto, upi ].
    * @param {string} amount -    Decimal Value. pattern: [+-]?([0-9]*[.])?[0-9]+.Describes a decimal value
    * @param {string} type -  Enum, describes order status.
    * @param {string} status - Enum, paymnet status.
    * @param {string} time - 	Describes a time.
    * @param {string} collected_by - Enum, collectedBy.
    * @param {string} currecy - 	 Price/properties/currencystring. ISO 4217 alphabetic currency code e.g. 'INR'.
    */
    uri: string;
    tl_method: Method | null;
    params: {
        transaction_id: string;
        transaction_status: string | null;
        amount: string | null;
        currency: string;
    };
    type: orderStatus | null;
    status: paymentStatus | null;
    time: Time;
    collected_by: collectedBy | null;
};
export declare type Offers = {
    id: string;
    descriptor: Descriptor;
    location_ids: string[];
    category_ids: string[];
    item_ids: string[];
    time: Time;
};
export declare type State = {
    /**
     * Describes a state.
     * @param {string} description - Describes the description of a real-world object.
     * @param {string} updated_at -  date-time.
     * @param {string} updated_by -    ID of entity which changed the state.
     */
    description: Descriptor | null;
    updated_at: string | null;
    updated_by: string | null;
};
export declare type Person = {
    /**
    * 	Describes the price of an item. Allows for domain extension.
    * @param {string} name -   // Describes the name of a person in format: ./{given_name}/{honorific_prefix}/{first_name}/{middle_name}/{last_name}/{honorific_suffix}.
    * @param {string} image -  Image of an object. A url based image will look like, uri:http://path/to/image.An image can also be sent as a data string. For example : data:js87y34ilhriuho84r3i4.
    * @param {string} dob-  date-time.
    * @param {string} gender -  Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender.
    * @param {string} cred -  cred.
    * @param {string} tags -  tags.
    */
    name: string;
    image: string;
    dob: string;
    gender: string;
    cred: string;
    tags: [];
};
export declare type Contact = {
    /**
     * Describes a circular area on the map.
     * @param {string} phone - phone.
     * @param {string} email - email.
     * @param {string} tags - Describes a tag. This is a simple key-value store which is used to contain extended metadata.
     *
     */
    phone: string;
    email: string;
    tags: [];
};
export declare type Vehicle = {
    category: string;
    capacity: number;
    make: string;
    model: string;
    size: string;
    variant: string;
    color: string;
    energy_type: string;
    registration: string;
};
export declare type Agent = {
    /**
     * Create Agent.
     * @param {string} name - pattern : Describes the name of a person in format: ./{given_name}/{honorific_prefix}/{first_name}/{middle_name}/{last_name}/{honorific_suffix}
     * @param {string} image - Image of an object.A url based image will look like,uri:http://path/to/image.An image can also be sent as a data string. For example data:js87y34ilhriuho84r3i4.
     * @param {string} dob - Dateof birth in date format.
     * @param {string} gender - Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender.
     * @param {string} cred - credit.
     * @param {string} tags - 	Describes a tag. This is a simple key-value store which is used to contain extended metadata.
     * @param {string} phone-  Phone number.
     * @param {string} email- email id.
     * @param {string} rateable - If the entity can be rated or not.
     */
    name: string;
    image: string;
    dob: string;
    gender: string;
    cred: string;
    tags: {};
    phone: string | null;
    email: string | null;
    rateable: boolean | false;
};
export declare type Location = {
    id: string;
    descriptor: Descriptor;
    gps: string;
    address: Address;
    station_code: string;
    city: City;
    country: Country;
    circle: Circle;
    polygon: string;
    dspace: string;
    time: Time;
};
export declare type Authorization = {
    /**
     * Create Authorization.
     * @param {string} type - Type of authorization mechanism used.
     * @param {string} token - Token used for authorization.
     * @param {string} valid_from - Timestamp in RFC3339 format from which token is valid.
     * @param {string} valid_to - Timestamp in RFC3339 format until which token is valid.
     * @param {string} status - credit.
     */
    type: string | null;
    token: string | null;
    valid_from: string | null;
    valid_to: string | null;
    status: string | null;
};
export declare type Address = {
    /**
     * Create Address.
     * @param {string} door - Door / Shop number of the address.
     * @param {string} building - Name of the building or block.
     * @param {string} street - Name of address if applicable. Example, shop name.
     * @param {string} name - Street name or number.
     * @param {string} locality - Name of the locality, apartments.
     * @param {string} ward - Name or number of the ward if applicable.
     * @param {string} state -  State name.
     * @param {string} country - Country name.
     * @param {string} area_code - This can be Pincode, ZIP code or any equivalent.
     * @param {string} country - Country name.
     */
    door: string | null;
    name: string | null;
    building: string | null;
    street: string | null;
    locality: string | null;
    ward: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    area_code: string | null;
};
export declare type Scalar = {
    /**
     * An object representing a scalar quantity..
     * @param {string} type- Enum type.
     * @param {number} value - number.
     * @param {number} estimted_value - number.
     * @param {number} vcomputed_alue - number.
     * @param {number} range - min and max number.
     * @param {string} unit - Street name or number.
     */
    type: type | null;
    value: number;
    estimated_value: number | null;
    computed_value: number | null;
    range: {
        min: number | null;
        max: number | null;
    };
    unit: string;
};
export declare type City = {
    /**
     * Describes a city.
     * @param {string} name - Name of the city.
     * @param {string} code - Codification of city code will be using the std code of the city e.g. for Bengaluru, city code is 'std:080'.
     */
    name: string;
    code: string;
};
export declare type Country = {};
export declare type Item = {
    /**
   * An element in the feedback form. It can be question or an answer to the question.
   * @param {string} id - This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.
   * @param {string} parent_id -  This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product..
   * @param {string} descriptor - Describes the description of a real-world object.
   * @param {string} price - Describes the price of an item. Allows for domain extension.
   * @param {string} descriptor - Describes the description of a real-world object.
   * @param {string} category_id - Unique id of the category.
   * @param {string} fulfillment_id - Unique reference ID to the fulfillment of an order.
   * @param {string} location_id - Location/properties/idstring.
   * @param {number} rating - Rating value given to the object.
   * @param {string} time - Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations.
   * @param {boolean} rateable - If the entity can be rated or not.
   * @param {boolean} matched - boolean.
   * @param {boolean} related - boolean.
   * @param {boolean} recommended - boolean.
   * @param {array} tags - Describes a tag. This is a simple key-value store which is used to contain extended metadata.
   */
    id: string;
    parent_item_id: string | null;
    descriptor: Descriptor;
    price: Price;
    category_id: string;
    fulfillment_id: string;
    rating?: number;
    location_id: string;
    time?: Time;
    rateable?: boolean | false;
    matched: boolean | false;
    related?: boolean | false;
    recommended?: boolean | false;
    "@ondc/org/brand_provider_name": string;
    "@ondc/org/brand_provider_contact_details": Contacts;
    "@ondc/org/delivery_type": DeliveryType;
    "@ondc/org/denomination": [number];
    "@ondc/org/occasion": occasionType;
    "@ondc/org/usability"?: usabilityType;
    "@ondc/org/expiry_period"?: string;
    "@ondc/org/terms_and_conditions": string;
    "@ondc/org/returnable": boolean;
    "@ondc/org/seller_pickup_return": boolean;
    "@ondc/org/return_window": string;
    "@ondc/org/cancellable": boolean;
    "@ondc/org/time_to_ship"?: string;
    "@ondc/org/available_on_cod": boolean;
    "@ondc/org/contact_details_consumer_care": string;
    "@ondc/org/statutory_reqs_packaged_commodities"?: object;
    "@ondc/org/statutory_reqs_prepackaged_food"?: object;
    "@ondc/org/mandatory_reqs_veggies_fruits"?: object;
    tags: [];
};
export declare type Circle = {
    /**
     * Describes a circular area on the map.
     * @param {string} gps - pattern: ^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$.Describes a gps coordinate.
     * @param {string} radius - An object representing a scalar quantity.
     */
    gps: string | null;
    radius: Scalar;
};
export declare type Price = {
    /**
     * 	Describes the price of an item. Allows for domain extension.
     * @param {string} currency - ISO 4217 alphabetic currency code e.g. 'INR'.
     * @param {string} value -  DecimalValuestring. pattern: [+-]?([0-9]*[.])?[0-9]+. Describes a decimal value.
     * @param {string} estimated_value -  DecimalValuestring. pattern: [+-]?([0-9]*[.])?[0-9]+. Describes a decimal value.
     * @param {string} computed_value -  DecimalValuestring. pattern: [+-]?([0-9]*[.])?[0-9]+. Describes a decimal value.
     * @param {string} listed_value -  DecimalValuestring. pattern: [+-]?([0-9]*[.])?[0-9]+. Describes a decimal value.
     * @param {string} offered_value -  DecimalValuestring. pattern: [+-]?([0-9]*[.])?[0-9]+. Describes a decimal value.
     * @param {string} minimum_value -  DecimalValuestring. pattern: [+-]?([0-9]*[.])?[0-9]+. Describes a decimal value.
     * @param {string} maximum_value -  DecimalValuestring. pattern: [+-]?([0-9]*[.])?[0-9]+. Describes a decimal value.
     */
    currency: string | null;
    value: string | null;
    estimated_value: string | null;
    computed_value: string | null;
    listed_value: string | null;
    offered_value: string | null;
    minimum_value: string | null;
    maximum_value: string | null;
};
export declare type Error = {
    /**
     * Describes an Error.
     * @param {string} type - ENUM ["CONTEXT-ERROR", "CORE-ERROR", "DOMAIN-ERROR", "POLICY-ERROR", "JSON-SCHEMA-ERROR"].
     * @param {string} code - ONDC specific error code. For full list of error codes, refer to docs/drafts/Error Codes.md of this repo.
     * @param {string} path - Path to json schema generating the error. Used only during json schema validation errors.
     * @param {string} message - Human readable message describing the error.
     */
    type: Context;
    code: string;
    path: string;
    message: string;
};
export declare type Feedback = {
    /**
     * Feedback for a service.
     * @param {string} feedback_form - Describes a feedback form that a Seller App can send to get feedback from the Buyer App.
     * @param {string} feedback_url -  Describes how a feedback URL will be sent by the Seller App.
     */
    feedback_form: FeedbackForm | null;
    feedback_url: FeedbackUrl | null;
};
export declare type FeedbackForm = {
    feedbackFormElement: FeedbackFormElement | null;
};
export declare type FeedbackUrl = {
    /**
     * Describes how a feedback URL will be sent by the Seller App.
     * @param {string} url - feedback URL sent by the Seller App.
     * @param {string} tl_method -  Enum ["http/get", "http/post "].
     * @param {string} feedback_id -  This value will be placed in the the $feedback_id url param in case of http/get and in the requestBody http/post requests.
     */
    url: string | null;
    tl_method: feedbackMethod;
    params: {
        feedback_id: string;
    };
};
export declare type FeedbackFormElement = {
    /**
     * An element in the feedback form. It can be question or an answer to the question.
     * @param {string} id - uri.
     * @param {string} parent_id -  string.
     * @param {string} question - Specifies the question to which the answer options will be contained in the child FeedbackFormElements
     * @param {string} answer_type - Specifies how the answer option should be rendered.
     */
    id: string;
    parent_id: string;
    question: string;
    answer: string;
    answer_type: AnswerType;
};
export declare type ItemQuantity = {
    /**
     * Describes count or amount of an item.
     * @param {number} count - type number minimum 0.
     * @param {string} measure -  An object representing a scalar quantity.
     */
    allocated: {
        count: number | 0;
        measure: Scalar;
    };
    available: {
        count: number | 0;
        measure: Scalar;
    };
    maximum: {
        count: number | 0;
        measure: Scalar;
    };
    minimum: {
        count: number | 0;
        measure: Scalar;
    };
    selected: {
        count: number | 0;
        measure: Scalar;
    };
};
export declare type Organiztion = {
    /**
      * Describes an organization.
      * @param {string} name - name.
      * @param {string} cred - cred.
      */
    name: string;
    cred: string;
};
export declare type Quotation = {
    /**
    * Describes a quote.
    * @param {number} ttl - type string.
    * @param {string} price -  Describes duration as per ISO8601 format.
    * @param {number} breakup - Describe a breakup.
    */
    price: Price;
    breakup: [breakup];
    ttl: string;
};
declare type breakup = {
    /**
    * @param {number} title - Describe a title.
    * @param {string} price -  Describe a price.
    */
    title: string;
    price: Price;
};
export declare type Page = {
    /**
     * 	Describes a Page.
     * @param {string} id - uri.
     * @param {string} value -  uri.
     */
    id: string | null;
    next_id: string | null;
};
export declare enum usabilityType {
    "online" = "online",
    offline = "offline",
    both = "both"
}
export declare enum occasionType {
    BIRTHDAY = "BIRTHDAY",
    MARRIAGE = "MARRIAGE",
    FESTIVAL = "FESTIVAL",
    FRIENDSHIP = "FRIENDSHIP",
    OTHER = "OTHER"
}
export declare enum type {
    "CONSTANT" = 0,
    "VARIABLE" = 1
}
export declare enum Method {
    "http/get" = 0,
    "http/post" = 1,
    "payto" = 2,
    "upi" = 3
}
export declare enum orderStatus {
    "ON-ORDER" = 0,
    "PRE-FULFILLMENT" = 1,
    "ON-FULFILLMENT" = 2,
    "POST-FULFILLMENT" = 3
}
export declare enum paymentStatus {
    "PAID" = 0,
    "NOT-PAID" = 1
}
export declare enum collectedBy {
    "BAP" = 0,
    "BPP" = 1
}
export declare enum Context {
    "CONTEXT-ERROR" = 0,
    "CORE-ERROR" = 1,
    "DOMAIN-ERROR" = 2,
    "POLICY-ERROR" = 3,
    "JSON-SCHEMA-ERROR" = 4
}
export declare enum feedbackMethod {
    "http/get" = 0,
    "http/post " = 1
}
export declare enum AnswerType {
    "radio" = 0,
    "checkbox" = 1,
    "text" = 2
}
export declare enum DeliveryType {
    "SMS" = "SMS",
    "EMAIL" = "EMAIL",
    SMS_EMAIL = "SMS_EMAIL",
    PHYSICAL = "PHYSICAL"
}
export {};
