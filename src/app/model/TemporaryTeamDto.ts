import {TemporaryTeamUserDto} from "./TemporaryTeamUserDto";

export class TemporaryTeamDto {
  private amicalUsers: Array<TemporaryTeamUserDto>;
  private championshipUsers: Array<TemporaryTeamUserDto>;


  constructor(amicalUsers: Array<TemporaryTeamUserDto>, championshipUsers: Array<TemporaryTeamUserDto>) {
    this.amicalUsers = amicalUsers;
    this.championshipUsers = championshipUsers;
  }

  public getAmicalUsers(): Array<TemporaryTeamUserDto>{
    return this.amicalUsers;
  }

  public getChampionshipUsers(): Array<TemporaryTeamUserDto>{
    return this.championshipUsers;
  }
}
