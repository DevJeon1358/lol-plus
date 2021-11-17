import { LOLPlatform, LOLRegion } from '../constant';

export interface LoLPlusClientOptions {
  apiKey: string;
  gamePlatform: keyof typeof LOLPlatform;
  gameRegion: keyof typeof LOLRegion;
}
