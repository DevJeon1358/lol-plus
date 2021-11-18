export enum LOLRoutingValue {
  AMERICAS = 'AMERICAS',
  ASIA = 'ASIA',
  EUROPE = 'EUROPE',
}

export enum LOLPlatform {
  BR1 = 'BR1',
  EUW1 = 'EUW1',
  JP1 = 'JP1',
  KR = 'KR',
  LA1 = 'LA1',
  LA2 = 'LA2',
  NA1 = 'NA1',
  OC1 = 'OC1',
  TR1 = 'TR1',
  RU = 'RU',
}

export enum LOLRegion {
  BR = 'BR',
  EUNE = 'EUNE',
  EUW = 'EUW',
  LAN = 'LAN',
  LAS = 'LAS',
  NA = 'NA',
  OCE = 'OCE',
  RU = 'RU',
  TR = 'TR',
  JP = 'JP',
  KR = 'KR',
}

export const LOLRoutingValueMapping: { [key in LOLRegion]: keyof typeof LOLRoutingValue} = {
  NA: 'AMERICAS',
  BR: 'AMERICAS',
  LAN: 'AMERICAS',
  LAS: 'AMERICAS',
  OCE: 'AMERICAS',
  KR: 'ASIA',
  JP: 'ASIA',
  EUNE: 'EUROPE',
  EUW: 'EUROPE',
  TR: 'EUROPE',
  RU: 'EUROPE',
};
