const ALLIANCE_DATA = {

  // =========================
  // リーグ紹介
  // =========================
  leagues: [
    {
      id: "WBL",
      name: "WBL",
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
      owner: "未定",
      region: {
        ja: "アジア",
        ko: "아시아",
        en: "Asia",
        zh: "亚洲"
      },
      matchTime: "未定",
      teams: []
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
      owner: "未定",
      region: {
        ja: "アジア",
        ko: "아시아",
        en: "Asia",
        zh: "亚洲"
      },
      matchTime: "未定",
      teams: []
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
      owner: "未定",
      region: {
        ja: "韓国",
        ko: "한국",
        en: "Korea",
        zh: "韩国"
      },
      matchTime: "未定",
      teams: []
    }
  ],


  // =========================
  // AHBA公式掲載試合
  // =========================
  games: [

    {
      id: 1,
      type: "international",
      title: {
        ja: "国際親善試合",
        ko: "국제 친선 경기",
        en: "International Friendly",
        zh: "国际友谊赛"
      },

      time: "2026-09-13T11:00:00+09:00",

      home: "AHBA",
      away: "BTBL",

      homeScore: null,
      awayScore: null,

      status: "upcoming"

      round: "Friendly match"

      detail: {

        innings: {
          home: [-, -, -, -, -, -, -, -, -],
          away: [-, -, -, -, -, -, -, -, -]
        },

      pitching: {

        win: ""

        lose: ""

        save: ""

        holds: [
          ""
          ""
        ]

      },

      homeRuns: [

        {
          team: "",
          player: "",
          inning: ,
          runs:
        },

      ],

      notes: {
        ja: "",
        ko: "",
        en: "",
        zh: "",
      }
        
    }
  }

  ],


  // =========================
  // AHBA主催大会などの順位表
  // =========================
  standings: {

    // 大会がない場合は空
    current: null

  }

};
