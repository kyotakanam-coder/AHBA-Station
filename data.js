/*
========================================
 Asia HCBB Baseball Alliance
 DATA FILE
========================================

 このファイルを変更すると、
 サイトの試合・順位・リーグ情報が変わります。

 timeはISO 8601形式です。

 日本時間の場合：
 2026-09-12T20:00:00+09:00
*/


const ALLIANCE_DATA = {

  /*
  ================================
  LEAGUES
  ================================
  */

  leagues: [
  {
    id: "A",
    name: "A LEAGUE",
    country: {
      ja: "ASIA",
      ko: "ASIA",
      en: "ASIA",
      zh: "ASIA"
    },
    description: {
      ja: "Asia HCBBのメイン競技リーグ。",
      ko: "Asia HCBB의 메인 경쟁 리그입니다.",
      en: "The main competitive league of Asia HCBB.",
      zh: "Asia HCBB的主要竞技联赛。"
    },
    owner: "Owner Name",
    region: {
      ja: "アジア",
      ko: "아시아",
      en: "Asia",
      zh: "亚洲"
    },
    matchTime: "20:00 JST",
    teams: ["NEXUS", "ORBIT", "VORTEX", "LYNX"]
  },

  {
    id: "B",
    name: "B LEAGUE",
    country: {
      ja: "ASIA",
      ko: "ASIA",
      en: "ASIA",
      zh: "ASIA"
    },
    description: {
      ja: "新規・発展チームを中心としたリーグ。",
      ko: "신규 및 성장 팀을 중심으로 한 리그입니다.",
      en: "A league focused on new and developing teams.",
      zh: "以新建及发展中球队为中心的联赛。"
    },
    owner: "Owner Name",
    region: {
      ja: "アジア",
      ko: "아시아",
      en: "Asia",
      zh: "亚洲"
    },
    matchTime: "21:30 JST",
    teams: ["AURORA", "METEOR"]
  },

  {
    id: "KOREA",
    name: "KOREA LEAGUE",
    country: {
      ja: "🇰🇷 KOREA",
      ko: "🇰🇷 KOREA",
      en: "🇰🇷 KOREA",
      zh: "🇰🇷 KOREA"
    },
    description: {
      ja: "韓国コミュニティを中心としたサイドリーグ。",
      ko: "한국 커뮤니티를 중심으로 운영되는 사이드 리그입니다.",
      en: "A side league centered around the Korean community.",
      zh: "以韩国社区为中心运营的支线联赛。"
    },
    owner: "Owner Name",
    region: {
      ja: "韓国",
      ko: "한국",
      en: "Korea",
      zh: "韩国"
    },
    matchTime: "21:00 KST",
    teams: ["SEOUL", "BUSAN"]
  }
],



  /*
  ================================
  GAMES
  ================================
  */

  games: [

    {
      id: 1,

      league: "Friendly-Match",

      time:
        "2026-09-13T11:00:00+09:00",

      home:
        "AHBA",

      away:
        "BTBL",

      homeScore:
        null,

      awayScore:
        null,

      status:
        "upcoming",

      round:
        "第1節"
    },


    {
      id: 2,

      league: "A",

      time:
        "2026-09-06T21:30:00+09:00",

      home:
        "VORTEX",

      away:
        "LYNX",

      homeScore:
        2,

      awayScore:
        2,

      status:
        "finished",

      round:
        "第1節"
    },


    {
      id: 3,

      league: "B",

      time:
        "2026-09-07T20:00:00+09:00",

      home:
        "AURORA",

      away:
        "METEOR",

      homeScore:
        null,

      awayScore:
        null,

      status:
        "upcoming",

      round:
        "第1節"
    },


    {
      id: 4,

      league: "KOREA",

      time:
        "2026-09-07T21:00:00+09:00",

      home:
        "SEOUL",

      away:
        "BUSAN",

      homeScore:
        null,

      awayScore:
        null,

      status:
        "upcoming",

      round:
        "第1節"
    },


    {
      id: 5,

      league: "A",

      time:
        "2026-09-08T20:00:00+09:00",

      home:
        "ORBIT",

      away:
        "VORTEX",

      homeScore:
        null,

      awayScore:
        null,

      status:
        "upcoming",

      round:
        "第2節"
    },


    {
      id: 6,

      league: "B",

      time:
        "2026-09-08T21:30:00+09:00",

      home:
        "METEOR",

      away:
        "AURORA",

      homeScore:
        null,

      awayScore:
        null,

      status:
        "upcoming",

      round:
        "第2節"
    }

  ],



  /*
  ================================
  STANDINGS
  ================================
  */

  standings: {

    A: [

      [
        "NEXUS",
        1,
        1,
        0,
        1.000,
        5,
        3
      ],

      [
        "VORTEX",
        1,
        0,
        0,
        .500,
        2,
        2
      ],

      [
        "LYNX",
        1,
        0,
        0,
        .500,
        2,
        2
      ],

      [
        "ORBIT",
        1,
        0,
        1,
        .000,
        3,
        5
      ]

    ],


    B: [

      [
        "AURORA",
        0,
        0,
        0,
        0,
        0,
        0
      ],

      [
        "METEOR",
        0,
        0,
        0,
        0,
        0,
        0
      ]

    ],


    KOREA: [

      [
        "SEOUL",
        0,
        0,
        0,
        0,
        0,
        0
      ],

      [
        "BUSAN",
        0,
        0,
        0,
        0,
        0,
        0
      ]

    ]

  }

};
