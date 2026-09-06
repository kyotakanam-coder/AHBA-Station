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
      country: "ASIA",
      description:
        "Asia HCBBのメイン競技リーグ。"
    },

    {
      id: "B",
      name: "B LEAGUE",
      country: "ASIA",
      description:
        "新規・発展チームを中心としたリーグ。"
    },

    {
      id: "KOREA",
      name: "KOREA LEAGUE",
      country: "🇰🇷 KOREA",
      description:
        "韓国コミュニティを中心としたサイドリーグ。"
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

      league: "A",

      time:
        "2026-09-06T20:00:00+09:00",

      home:
        "NEXUS",

      away:
        "ORBIT",

      homeScore:
        5,

      awayScore:
        3,

      status:
        "finished",

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
