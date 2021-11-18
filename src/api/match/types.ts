export interface LOLMatchIdRequestOptions {
  startDate?: Date;
  endDate?: Date;
  queue?: number;
  type?: string;
  start?: number;
  count?: number;
}

export interface LOLMatchData {
  metadata: LOLMatchMetaData;
  info: LOLMatchInfoData;
}

export interface LOLMatchMetaData {
  dataVersion: string;
  matchId: string;
  participants: string[];
}

export interface LOLMatchInfoData {
  gameCreation: number;
  gameDuration: number;
  gameStartTimestamp: number;
  gameEndTimestamp: number;
  gameId: number;
  gameMode: string;
  gameName: string;
  gameType: string;
  gameVersion: string;
  mapId: number;
  platformId: string;
  queueId: number;
  participants: any[];
  teams: LOLMatchTeamData[];
  tournamentCode: string;
}

export interface LOLMatchParticipantData {
  // ID
  participantId: number;

  // Play Time
  timePlayed: number;
  totalTimeSpentDead: number;
  longestTimeSpentLiving: number;

  // Player ID
  puuid: string;
  riotIdName: string;
  riotIdTagline: string;
  summonerId: string;
  summonerLevel: number;
  summonerName: string;
  profileIcon: number;

  // Team Information
  teamId: number;
  teamPosition: string;

  // KDA
  kills: number;
  unrealKills: number;
  deaths: number;
  assists: number;

  // Baron & Dragon
  baronKills: number;
  dragonKills: number;

  // Inhibitor
  inhibitorKills: number;
  inhibitorTakedowns: number;
  inhibitorsLost: number;

  bountyLevel: number;

  // Champion
  championName: string;
  championTransform: number;

  // EXP
  champLevel: number;
  champExperience: number;

  consumablesPurchased: number;

  // Multi Kills
  doubleKills: number;
  tripleKills: number;
  quadraKills: number;
  pentaKills: number;
  killingSprees: number;
  largestKillingSpree: number;
  largestMultiKill: number;

  // Critical Strike
  largestCriticalStrike: number;

  // First Blood
  firstBloodKill: boolean;
  firstBloodAssist: boolean;

  // First Tower
  firstTowerKill: boolean;
  firstTowerAssist: boolean;

  // Golds
  goldEarned: number;
  goldSpent: number;

  // Items
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  itemsPurchased: number;

  // Lane
  lane: string;
  role: string;
  individualPosition: string;

  // Nexus
  nexusKills: number;
  nexusTakedowns: number;
  nexusLost: number;

  // Perks
  perks: LOLPerksData;

  // Spells
  spell1Casts: number;
  spell2Casts: number;
  spell3Casts: number;
  spell4Casts: number;
  summoner1Casts: number;
  summoner1Id: number;
  summoner2Casts: number;
  summoner2Id: number;

  // Minions
  neutralMinionsKilled: number;
  totalMinionsKilled: number;

  // CC
  timeCCingOthers: number;
  totalTimeCCDealt: number;

  // Damage Dealt
  damageDealtToBuildings: number;
  damageDealtToObjectives: number;
  damageDealtToTurrets: number;
  damageSelfMitigated: number;

  // Total Damage
  totalDamageDealt: number;
  totalDamageDealtToChampions: number;
  totalDamageShieldedOnTeammates: number;
  totalDamageTaken: number;

  // Physical Damage
  physicalDamageDealt: number;
  physicalDamageDealtToChampions: number;
  physicalDamageTaken: number;

  // Magic Damage
  magicDamageDealt: number;
  magicDamageDealtToChampions: number;
  magicDamageTaken: number;

  // True Damage
  trueDamageDealt: number;
  trueDamageDealtToChampions: number;
  trueDamageTaken: number;

  // Total Heals
  totalHeal: number;
  totalUnitsHealed: number;
  totalHealsOnTeammates: number;

  // Turrets
  turretKills: number;
  turretTakedowns: number;
  turretsLost: number;

  // Objectives
  objectivesStolen: number;
  objectivesStolenAssists: number;

  // Visions
  visionScore: number;
  wardsKilled: number;
  wardsPlaced: number;
  visionWardsBoughtInGame: number;
  detectorWardsPlaced: number;
  sightWardsBoughtInGame: number;

  // Game End Reasons
  win: boolean;
  gameEndedInEarlySurrender: boolean;
  gameEndedInSurrender: boolean;
  teamEarlySurrendered: boolean;
}

export interface LOLPerksData {
  statPerks: LOLPerkStatsData;
  styles: LOLPerkStyleData[];
}

export interface LOLPerkStatsData {
  defense: number;
  flex: number;
  offense: number;
}

export interface LOLPerkStyleData {
  description: string;
  selections: any[];
  style: number;
}

export interface LOLPerkStyleSelectionData {
  perk: number;
  var1: number;
  var2: number;
  var3: number;
}

export interface LOLMatchTeamData {
  bans: LOLMatchBanData[];
  objectives: LOLMatchObjectivesData;
  teamId: number;
  win: boolean;
}

export interface LOLMatchBanData {
  championId: number;
  pickTurn: number;
}

export interface LOLMatchObjectivesData {
  baron: LOLMatchObjectiveData;
  champion: LOLMatchObjectiveData;
  dragon: LOLMatchObjectiveData;
  inhibitor: LOLMatchObjectiveData;
  riftHerald: LOLMatchObjectiveData;
  tower: LOLMatchObjectiveData;
}

export interface LOLMatchObjectiveData {
  first: boolean;
  kills: number;
}
