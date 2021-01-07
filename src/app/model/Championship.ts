import {Team} from "./Team";


export class Championship {
  private _id: number;
  private _name: string;
  private _image1: string;
  private _image2: string;
  private _listOfTeams: Team[]

  constructor() {
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

  get listOfTeams(): Team[] {
    return this._listOfTeams;
  }
}
