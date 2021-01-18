export class TeamSentChamp {
  public type: string;
  public name: string;
  public gameId: number;
  public hobbyId: number;
  public playersIds: number[];


  constructor(type: string, name: string, gameId: number, hobbyId: number, playersIds: number[]) {
    this.type = type;
    this.name = name;
    this.gameId = gameId;
    this.hobbyId = hobbyId;
    this.playersIds=playersIds;
  }
}
