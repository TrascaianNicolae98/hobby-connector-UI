
export class TeamDto {
  public teamType: string;
  public name: string;
  public hobbyid: number;
  public gameid: number;


  constructor(teamType: string, name: string, hobbyid: number, gameid: number) {
    this.teamType = teamType;
    this.name = name;
    this.hobbyid = hobbyid;
    this.gameid = gameid;
  }
}


