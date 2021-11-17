# lol-plus
[![npm version](https://badge.fury.io/js/lol-plus.svg)](https://badge.fury.io/js/lol-plus)

A Simple League of Legends API Wrapper for [Node](https://nodejs.org/)

> WARN: **This project is under development.**<br />If you found bug, or issues, please submit via [Github Issues](https://github.com/DevJeon1358/lol-plus/issues/new)!

## QuickStart
```
$ npm i lol-plus
```

```typescript
import { LoLPlusClient } from 'lol-plus'
const client = new LoLPlusClient({
  // Riot API Key
  apiKey: '*************',
  // Game Platform, Used to choose API Endpoint
  // Full List Could be found at Riot API Documention
  gamePlatform: 'KR' | 'NA1' | 'LA1' | 'LA2', 
  // Game Region, Used to get DataDragon Realm Information
  gameRegion: 'KR' | 'JP' | 'NA' | 'LAN' | 'LAS',
});

const app = async () => {
  // Get Rotation Champion List (Returns Promise)
  const rotaionChampionList = await client.champion.getRotationChampionList();

  // Logs Rotation Champion Names
  console.log(rotationChampionList.freeChampionList.map((e) => e.name));

  // Get Summoner Information By Summoner Name
  await client.summoner.getSummonerByName('summonerName');
}

app();
```

