import { LOLChampionClient, LOLDatadragonClient, LOLSummonerClient } from './api';
import { LOLPlatform, LOLRegion } from './constant';
import { LoLPlusClientOptions, LOLRequestOptions } from './structure';

export class LoLPlusClient {
  readonly requestOptions: LOLRequestOptions;
  readonly champion: LOLChampionClient;
  readonly datadragon: LOLDatadragonClient;
  readonly summoner: LOLSummonerClient;

  constructor(options: LoLPlusClientOptions) {
    const { apiKey, gamePlatform, gameRegion } = options;
    const platform = LOLPlatform[gamePlatform];
    const region = LOLRegion[gameRegion];

    this.requestOptions = new LOLRequestOptions(apiKey, platform, region);
    this.champion = new LOLChampionClient(this);
    this.datadragon = new LOLDatadragonClient(this);
    this.summoner = new LOLSummonerClient(this);
  }
}
