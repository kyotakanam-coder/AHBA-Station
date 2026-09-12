/* =========================================================
   Asia HCBB Baseball Alliance
   data.js
   ========================================================= */

const ALLIANCE_DATA = {

  /* =========================================================
     LEAGUES
     ========================================================= */

  leagues: [

    {
      id: "KBO",
      name: {
        ja: "KBO",
        ko: "KBO",
        en: "KBO",
        zh: "KBO"
      },
      country: {
        ja: "韓国",
        ko: "대한민국",
        en: "South Korea",
        zh: "韩国"
      },
      description: {
        ja: "The KBO League is Korea’s largest and premier league.",
        ko: "The KBO League is Korea’s largest and premier league.",
        en: "The KBO League is Korea’s largest and premier league.",
        zh: "The KBO League is Korea’s largest and premier league."
      },
      owner: "nicemanman_1"
    },

    {
      id: "KFB",
      name: {
        ja: "KFB",
        ko: "KFB",
        en: "KFB",
        zh: "KFB"
      },
      country: {
        ja: "韓国",
        ko: "대한민국",
        en: "South Korea",
        zh: "韩国"
      },
      description: {
        ja: "The KFB League is a rookie league created to develop and give opportunities to rookie players who don’t get many chances to play in larger leagues.",
        ko: "The KFB League is a rookie league created to develop and give opportunities to rookie players who don’t get many chances to play in larger leagues.",
        en: "The KFB League is a rookie league created to develop and give opportunities to rookie players who don’t get many chances to play in larger leagues.",
        zh: "The KFB League is a rookie league created to develop and give opportunities to rookie players who don’t get many chances to play in larger leagues."
      },
      owner: "nicemanman_1"
    },

    {
      id: "KOREA",
      name: {
        ja: "KOREA LEAGUE",
        ko: "KOREA LEAGUE",
        en: "KOREA LEAGUE",
        zh: "KOREA LEAGUE"
      },
      country: {
        ja: "韓国",
        ko: "대한민국",
        en: "South Korea",
        zh: "韩国"
      },
      description: {
        ja: "韓国を中心としたHCBBリーグ。",
        ko: "대한민국을 중심으로 운영되는 HCBB 리그.",
        en: "An HCBB league based primarily in South Korea.",
        zh: "以韩国为中心运营的HCBB联赛。"
      },
      owner: "AHBA"
    }

  ],


  /* =========================================================
     OFFICIAL AHBA GAMES
     ========================================================= */

  games: [

    {
      id: "game-001",

      type: "international",

      title: {
        ja: "日本代表 vs 韓国代表",
        ko: "일본 대표 vs 대한민국 대표",
        en: "Japan vs South Korea",
        zh: "日本队 vs 韩国队"
      },

      time: "2026-09-10T19:00:00+09:00",

      home: "Japan",
      away: "Korea",

      homeScore: 5,
      awayScore: 3,

      status: "finished",

      round: {
        ja: "国際親善試合",
        ko: "국제 친선 경기",
        en: "International Friendly",
        zh: "国际友谊赛"
      },

      detail: {

        innings: {
          home: [0, 1, 0, 2, 0, 0, 1, 0, 1],
          away: [0, 0, 1, 0, 0, 2, 0, 0, 0]
        },

        pitching: {
          win: "山田 太郎",
          loss: "Kim Min-su",
          save: "佐藤 一郎",

          holds: [
            "佐々木 翔",
            "高橋 健"
          ]
        },

        homeRuns: [

          {
            team: "home",
            player: "山田 太郎",
            inning: 4,
            runs: 2
          },

          {
            team: "home",
            player: "佐藤 一郎",
            inning: 7,
            runs: 1
          },

          {
            team: "away",
            player: "Lee Junho",
            inning: 6,
            runs: 2
          }

        ],

        notes: {
          ja: "AHBA公式掲載の国際親善試合。",
          ko: "AHBA 공식 국제 친선 경기.",
          en: "An AHBA officially published international friendly.",
          zh: "AHBA官方发布的国际友谊赛。"
        }

      }

    },


    {
      id: "game-002",

      type: "friendly",

      title: {
        ja: "A LEAGUE選抜 vs KOREA LEAGUE選抜",
        ko: "A LEAGUE 선발 vs KOREA LEAGUE 선발",
        en: "A LEAGUE Select vs KOREA LEAGUE Select",
        zh: "A LEAGUE 精选队 vs KOREA LEAGUE 精选队"
      },

      time: "2026-09-12T20:00:00+09:00",

      home: "A LEAGUE Select",
      away: "KOREA LEAGUE Select",

      homeScore: 4,
      awayScore: 2,

      status: "finished",

      round: {
        ja: "AHBA交流戦",
        ko: "AHBA 교류전",
        en: "AHBA Exchange Game",
        zh: "AHBA交流赛"
      },

      detail: {

        innings: {
          home: [1, 0, 0, 2, 0, 0, 0, 1, 0],
          away: [0, 0, 1, 0, 0, 0, 1, 0, 0]
        },

        pitching: {
          win: "田中 翔",
          loss: "Park Jisoo",
          save: "中村 蓮",

          holds: [
            "山本 陸"
          ]
        },

        homeRuns: [

          {
            team: "home",
            player: "田中 翔",
            inning: 4,
            runs: 2
          },

          {
            team: "away",
            player: "Kim Joon",
            inning: 7,
            runs: 1
          }

        ],

        notes: {
          ja: "A LEAGUEとKOREA LEAGUEによる交流試合。",
          ko: "A LEAGUE와 KOREA LEAGUE의 교류 경기.",
          en: "An exchange game between A LEAGUE and KOREA LEAGUE.",
          zh: "A LEAGUE与KOREA LEAGUE之间的交流赛。"
        }

      }

    },


    {
      id: "game-003",

      type: "tournament",

      title: {
        ja: "AHBA INTERNATIONAL CUP 決勝",
        ko: "AHBA INTERNATIONAL CUP 결승",
        en: "AHBA INTERNATIONAL CUP Final",
        zh: "AHBA INTERNATIONAL CUP 决赛"
      },

      time: "2026-09-20T19:30:00+09:00",

      home: "Team Japan",
      away: "Team Taiwan",

      homeScore: 6,
      awayScore: 5,

      status: "finished",

      round: {
        ja: "決勝",
        ko: "결승",
        en: "Final",
        zh: "决赛"
      },

      detail: {

        innings: {
          home: [0, 1, 2, 0, 0, 1, 0, 0, 2],
          away: [1, 0, 0, 2, 0, 0, 1, 1, 0]
        },

        pitching: {
          win: "鈴木 颯",
          loss: "Lin Wei",
          save: "伊藤 海",

          holds: [
            "渡辺 翼",
            "吉田 陽"
          ]
        },

        homeRuns: [

          {
            team: "home",
            player: "鈴木 颯",
            inning: 3,
            runs: 2
          },

          {
            team: "home",
            player: "伊藤 海",
            inning: 9,
            runs: 2
          },

          {
            team: "away",
            player: "Chen Hao",
            inning: 4,
            runs: 2
          }

        ],

        notes: {
          ja: "AHBA INTERNATIONAL CUP 決勝戦。",
          ko: "AHBA INTERNATIONAL CUP 결승전.",
          en: "The final of the AHBA INTERNATIONAL CUP.",
          zh: "AHBA INTERNATIONAL CUP 决赛。"
        }

      }

    }

  ],


  /* =========================================================
     AHBA OFFICIAL STANDINGS
     ========================================================= */

  standings: {

    current: [

      {
        team: {
          ja: "Team Japan",
          ko: "Team Japan",
          en: "Team Japan",
          zh: "Team Japan"
        },

        played: 3,
        wins: 2,
        losses: 1,
        draws: 0,
        runsFor: 15,
        runsAgainst: 10,
        points: 6
      },

      {
        team: {
          ja: "Team Korea",
          ko: "Team Korea",
          en: "Team Korea",
          zh: "Team Korea"
        },

        played: 3,
        wins: 2,
        losses: 1,
        draws: 0,
        runsFor: 12,
        runsAgainst: 9,
        points: 6
      },

      {
        team: {
          ja: "Team Taiwan",
          ko: "Team Taiwan",
          en: "Team Taiwan",
          zh: "Team Taiwan"
        },

        played: 3,
        wins: 1,
        losses: 2,
        draws: 0,
        runsFor: 10,
        runsAgainst: 13,
        points: 3
      },

      {
        team: {
          ja: "Team China",
          ko: "Team China",
          en: "Team China",
          zh: "Team China"
        },

        played: 3,
        wins: 1,
        losses: 2,
        draws: 0,
        runsFor: 8,
        runsAgainst: 13,
        points: 3
      }

    ]

  }

};
