import type { LoLPlusClient } from '..';
import type { LOLMatchIdRequestOptions } from '../api';

export class LOLSummoner {
  private client: LoLPlusClient;

  readonly accountId: string;
  readonly profileIconId: number;
  readonly revisionDate: Date;
  readonly name: string;
  readonly id: string;
  readonly puuid: string;
  readonly summonerLevel: number;

  constructor(client: LoLPlusClient, data: any) {
    this.client = client;
    this.id = data.id;
    this.puuid = data.puuid;
    this.accountId = data.accountId;
    this.name = data.name;
    this.summonerLevel = data.summonerLevel;
    this.profileIconId = data.profileIconId;
    this.revisionDate = new Date(data.revisionDate);
  }

  async getMatchIdList(options?: LOLMatchIdRequestOptions) {
    return this.client.match.getMatchIds(this.puuid, options);
  }
}
