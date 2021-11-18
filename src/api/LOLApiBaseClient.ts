import fetch, { Headers } from 'node-fetch';
import { RiotApiError } from '../errors';
import { LOLRequestOptions } from '../structure';
import type { LoLPlusClient } from '../client';

export class LOLApiBaseClient {
  readonly client: LoLPlusClient;
  readonly requestOptions: LOLRequestOptions;

  constructor(client: LoLPlusClient) {
    this.client = client;
    this.requestOptions = this.client.requestOptions;
  }

  async callApi<T>(path: string, useRoutingValue = false): Promise<T> {
    const apiEndPoint = this.requestOptions.getApiEndpoint(useRoutingValue);
    const url = `${apiEndPoint}${path}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: new Headers({
        'X-Riot-Token': this.requestOptions.apiKey,
      }),
    });

    const body = await response.json();
    if (response.status === 200) {
      return body as T;
    }

    throw new RiotApiError(body);
  }
}
