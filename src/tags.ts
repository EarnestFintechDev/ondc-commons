export class Tags {
  //     description:	
  // Describes a tag. This is a simple key-value store which is used to contain extended metadata


  descriptor: string;
  list: { descriptor?: { code: string }, value: string }[]

  constructor(descriptor: string, list: { descriptor?: { code: string }, value: string }[]) {
    this.descriptor = descriptor
    this.list = list
  }
}