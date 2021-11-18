import fetch from 'node-fetch';
import {
  DATADRAGON_ENDPOINT,
  LOLPlatform,
  LOLRegion,
  LOLRoutingValue,
  LOLRoutingValueMapping,
  LOL_API_ENDPOINT,
} from '../constant';

interface RealmData {
  cdn: string;
  l: string;
  v: string;
}

export class LOLRequestOptions {
  readonly apiKey: string;
  readonly gamePlatform: LOLPlatform;
  readonly routingValue: LOLRoutingValue;
  readonly gameRegion: LOLRegion;

  private apiEndpoint: string | null;
  private dataDragonEndpoint: string | null;

  constructor(apiKey: string, gamePlatform: LOLPlatform, gameRegion: LOLRegion) {
    this.apiKey = apiKey;
    this.gamePlatform = gamePlatform;
    this.gameRegion = gameRegion;
    this.routingValue = LOLRoutingValue[LOLRoutingValueMapping[gameRegion]];

    this.apiEndpoint = null;
    this.dataDragonEndpoint = null;
  }

  getApiEndpoint(useRoutingValue = false) {
    if (useRoutingValue) {
      return LOL_API_ENDPOINT.replace('{platform}', this.routingValue);
    }

    if (!this.apiEndpoint) {
      this.apiEndpoint = LOL_API_ENDPOINT.replace('{platform}', this.gamePlatform);
    }

    return this.apiEndpoint;
  }

  async getDataDragonEndpoint() {
    if (!this.dataDragonEndpoint) {
      const realmUrl = `${DATADRAGON_ENDPOINT}/realms/${this.gameRegion.toLowerCase()}.json`;
      const response = await fetch(realmUrl);
      if (response.status !== 200) {
        throw new Error(`Got Invaild status while getting ${this.gameRegion} realm data`);
      }

      const body = await response.json() as RealmData;
      this.dataDragonEndpoint = `${body.cdn}/${body.v}/data/${body.l}`;

      // Timer to refresh realm data
      setTimeout(() => {
        this.dataDragonEndpoint = null;
      }, 60 * 60 * 1000);
    }

    return this.dataDragonEndpoint;
  }
}
