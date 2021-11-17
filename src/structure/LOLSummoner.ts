import type { LoLPlusClient } from '..';

export class LOLSummoner {
  readonly accountId: string;
  readonly profileIconId: number;
  readonly revisionDate: Date;
  readonly name: string;
  readonly id: string;
  readonly puuid: string;
  readonly summonerLevel: number;

  constructor(client: LoLPlusClient, data: any) {
    this.id = data.id;
    this.puuid = data.puuid;
    this.accountId = data.accountId;
    this.name = data.name;
    this.summonerLevel = data.summonerLevel;
    this.profileIconId = data.profileIconId;
    this.revisionDate = new Date(data.revisionDate);
  }
}
