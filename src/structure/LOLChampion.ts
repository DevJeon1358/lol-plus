export class LOLChampionShortInfo {
  readonly id: number;
  readonly key: string;
  readonly name: string;
  readonly title: string;
  readonly blurb: string;
  readonly info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  readonly tags: string[];
  readonly partype: string;
  readonly stats: {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeed: number;
    attackspeedperlevel: number;
  };

  constructor(data: any) {
    this.id = Number(data.key);
    this.key = data.key;
    this.name = data.name;
    this.title = data.title;
    this.blurb = data.blurb;
    this.tags = data.tags;
    this.partype = data.partype;

    this.info = data.info;
    this.stats = data.stats;
  }
}
