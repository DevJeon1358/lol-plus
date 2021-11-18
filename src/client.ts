import NodeCache from 'node-cache';
import {
  LOLChampionClient, LOLDatadragonClient, LOLMatchClient, LOLSummonerClient,
} from './api';
import { LOLPlatform, LOLRegion } from './constant';
import { LoLPlusClientOptions, LOLRequestOptions } from './structure';

export class LoLPlusClient {
  readonly cache: NodeCache;
  readonly requestOptions: LOLRequestOptions;
  readonly champion: LOLChampionClient;
  readonly datadragon: LOLDatadragonClient;
  readonly summoner: LOLSummonerClient;
  readonly match: LOLMatchClient;

  constructor(options: LoLPlusClientOptions) {
    const { apiKey, gamePlatform, gameRegion } = options;
    const platform = LOLPlatform[gamePlatform];
    const region = LOLRegion[gameRegion];

    this.cache = new NodeCache();

    this.requestOptions = new LOLRequestOptions(apiKey, platform, region);
    this.champion = new LOLChampionClient(this);
    this.datadragon = new LOLDatadragonClient(this);
    this.summoner = new LOLSummonerClient(this);
    this.match = new LOLMatchClient(this);
  }
}
