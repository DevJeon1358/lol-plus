import { LOLSummonerData } from './types';
import { LOLApiBaseClient } from '../LOLApiBaseClient';
import { LOLSummoner } from '../../structure/LOLSummoner';

export class LOLSummonerClient extends LOLApiBaseClient {
  async getSummonerByName(summonerName: string) {
    const result = await this.callApi<LOLSummonerData>(`/lol/summoner/v4/summoners/by-name/${summonerName}`);
    if (!result?.id) {
      return null;
    }

    return new LOLSummoner(this.client, result);
  }

  async getSummonerByPuuid(puuid: string) {
    const result = await this.callApi<LOLSummonerData>(`/lol/summoner/v4/summoners/by-puuid/${puuid}`);
    if (!result?.id) {
      return null;
    }

    return new LOLSummoner(this.client, result);
  }

  async getSummonerByAccountId(accountId: string) {
    const result = await this.callApi<LOLSummonerData>(`/lol/summoner/v4/summoners/by-account/${accountId}`);
    if (!result?.id) {
      return null;
    }

    return new LOLSummoner(this.client, result);
  }
}
