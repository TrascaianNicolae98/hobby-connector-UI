export class Hobby{
  private _id : number;
  private _name: string;
  private _image1: string;
  private _image2: string;
  private _description: string;
  private _noOfPlayers: number;

  constructor(id: number, name: string, image1: string, image2: string, description: string, noOfPlayers: number) {
    this._id = id;
    this._name = name;
    this._image1 = image1;
    this._image2 = image2;
    this._description = description;
    this._noOfPlayers = noOfPlayers;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get image1(): string {
    return this._image1;
  }

  set image1(value: string) {
    this._image1 = value;
  }

  get image2(): string {
    return this._image2;
  }

  set image2(value: string) {
    this._image2 = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get noOfPlayers(): number {
    return this._noOfPlayers;
  }

  set noOfPlayers(value: number) {
    this._noOfPlayers = value;
  }
}
