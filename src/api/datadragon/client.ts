import fetch from 'node-fetch';
import NodeCache from 'node-cache';
import { LOLApiBaseClient } from '../LOLApiBaseClient';
import type { LoLPlusClient } from '../../client';
import { DatadragonChampionListResponse } from './types';
import { LOLChampionShortInfo } from '../../structure';

export class LOLDatadragonClient extends LOLApiBaseClient {
  private async callDataDragon<T>(path: string): Promise<T> {
    const endpoint = await this.client.requestOptions.getDataDragonEndpoint();
    const url = `${endpoint}${path}`;

    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error(`Datadragon Request Not Successful, Got ${response.status} => ${url}`);
    }

    return response.json() as Promise<T>;
  }

  async getChampionShortInfoList() {
    const cacheKey = 'DATADRAGON_CHAMPION_LIST';
    const response = await this.callDataDragon<DatadragonChampionListResponse>('/champion.json');
    const championList = Object.values(response.data)
      .map((e) => new LOLChampionShortInfo(e));
    this.client.cache.set(cacheKey, championList, 30 * 60);

    return championList;
  }

  async getChampionDataFromKeyList(keyList: number[]) {
    const list = await this.getChampionShortInfoList();
    return list.filter((e) => keyList.includes(e.id));
  }

  async getChampionDataFromKey(key: number): Promise<LOLChampionShortInfo | undefined> {
    return (await this.getChampionDataFromKeyList([key]))[0];
  }
}
