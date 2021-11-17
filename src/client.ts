import { LOLChampionClient, LOLDatadragonClient } from './api';
import { LoLPlusClientOptions, LOLRequestOptions } from './structure';

export class LoLPlusClient {
  readonly requestOptions: LOLRequestOptions;
  readonly champion: LOLChampionClient;
  readonly datadragon: LOLDatadragonClient;

  constructor(options: LoLPlusClientOptions) {
    const { apiKey, gamePlatform, gameRegion } = options;
    this.requestOptions = new LOLRequestOptions(apiKey, gamePlatform, gameRegion);
    this.champion = new LOLChampionClient(this);
    this.datadragon = new LOLDatadragonClient(this);
  }
}
