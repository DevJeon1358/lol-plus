import { LOLPlatform, LOLRegion } from '../constant';

export interface LoLPlusClientOptions {
  apiKey: string;
  gamePlatform: LOLPlatform;
  gameRegion: LOLRegion;
}
