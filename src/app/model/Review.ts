export class Review {
  private _id: number;
  private _stars: number;
  private _feedback: string;
  private _userId: number;

  constructor() {
  }

  get id(): number {
    return this._id;
  }

  set id(value:number){
    this._id=value;
  }

  get stars(): number {
    return this._stars;
  }

  set stars(value:number){
    this._stars=value;
  }

  get feedback(): string {
    return this._feedback;
  }

  set feedback(value:string){
    this._feedback=value;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value:number){
    this._userId=value;
  }
}
