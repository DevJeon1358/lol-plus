import qs from 'qs';
import { LOLApiBaseClient } from '../LOLApiBaseClient';
import { LOLMatchIdRequestOptions } from './types';

export class LOLMatchClient extends LOLApiBaseClient {
  async getMatchIds(puuid: string, options?: LOLMatchIdRequestOptions) {
    const path = `/lol/match/v5/matches/by-puuid/${puuid}/ids`;
    if (!options) {
      return this.callApi<number[]>(path, true);
    }

    const startTime = options.startDate && options.startDate.getTime();
    const endTime = options.endDate && options.endDate.getTime();
    const query = qs.stringify({
      ...options,
      startTime,
      endTime,
    });

    return this.callApi<number[]>(`${path}?${query}`, true);
  }
}
