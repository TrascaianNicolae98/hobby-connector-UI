
export class Team {
  private _id: number;
  private _teamType: string;
  private _name: string;
  private _hobbyid: number;
  private _gameid: number;

  constructor(id: number, teamType: string, name: string, hobbyid: number, gameid:number) {

    this._id = id;
    this._teamType = teamType;
    this._name = name;
    this._hobbyid = hobbyid;
    this._gameid = gameid;
  }

  get id(): number {
    return this._id;
  }

  get teamType(): string {
    return this._teamType
  }

  get name(): string {
    return this._name;
  }

  get hobbyid(): number {
    return this._hobbyid;
  }
  get gameid(): number{
    return this._gameid;
  }

}


