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
