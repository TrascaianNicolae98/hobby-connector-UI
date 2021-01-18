export class InvitePlayerDto {
  private playerEmail: string;
  private hobbyId: number;
  private teamType: string;
  private captainId: number;


  constructor(playerEmail: string, hobbyId: number, teamType: string, captainId: number) {
    this.playerEmail = playerEmail;
    this.hobbyId = hobbyId;
    this.teamType = teamType;
    this.captainId = captainId;
  }
}
