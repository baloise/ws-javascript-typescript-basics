/**
 * TODO: Create a Pizza model with the needed attributes.
 * Example:
 * {
 *    "id": 1,
 *    "title": "Margherita",
 *    "description": "Tomato sauce, mozzarella, organic oregano",
 *    "price": 14.00,
 *    "image": "../public/images/margherita.jpeg`",
 * }
 * constructor:
 */
export class Pizza {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public price: number,
  ) {}

  get image(): string {
    return `../public/images/${this.title.toLocaleLowerCase()}.jpeg`;
  }
}
