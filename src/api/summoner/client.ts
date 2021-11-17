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
}
