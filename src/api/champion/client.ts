import { RotationChampionInfo } from './types';
import { LOLApiBaseClient } from '../LOLApiBaseClient';

export class LOLChampionClient extends LOLApiBaseClient {
  async getRotationChampionList() {
    const result = await this.callApi<RotationChampionInfo>('/lol/platform/v3/champion-rotations');
    const championIdList = result.freeChampionIds
      .concat(result.freeChampionIdsForNewPlayers);

    const championList = await this.client.datadragon.getChampionDataFromKeyList(championIdList);
    const freeChampionList = championList
      .filter((champion) => result.freeChampionIds.includes(champion.id));
    const freeChampionListForNewPlayers = championList
      .filter((champion) => result.freeChampionIdsForNewPlayers.includes(champion.id));

    return {
      freeChampionList,
      freeChampionListForNewPlayers,
      maxNewPlayerLevel: result.maxNewPlayerLevel,
    };
  }
}
