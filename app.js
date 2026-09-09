const D = ALLIANCE_DATA;

const $ = selector =>
  document.querySelector(selector);

const $$ = selector =>
  document.querySelectorAll(selector);


/* ==================================================
   LANGUAGE
================================================== */

const translations = {

  ja: {

    nav: {
      games: "試合",
      standings: "順位表",
      schedule: "時間表",
      leagues: "リーグ",
      admin: "管理"
    },

    hero: {
      title: "アジアのHCBBを、<br><span>ひとつのスコアボードへ。</span>",
      description:
        "試合結果、順位、各リーグの試合時間をひとつのサイトで確認できる Asia HCBB Baseball Alliance 公式ポータル。",
      games: "試合を見る",
      schedule: "時間表"
    },

    next: {
      title: "NEXT GAME"
    },

    games: {
      eyebrow: "MATCH CENTER",
      title: "試合結果・予定"
    },

    standings: {
      eyebrow: "STANDINGS",
      title: "順位表"
    },

    schedule: {
      eyebrow: "TIME TABLE",
      title: "リーグ時間表",
      timezone: "表示タイムゾーン："
    },

    leagues: {
      eyebrow: "LEAGUE INTRODUCTION",
      title: "リーグ紹介",
      view: "リーグページを見る"
    },

    filter: {
      allLeagues: "全試合",
      all: "全試合",
      upcoming: "予定",
      finished: "終了"
    },

    table: {
      team: "TEAM"
    },

    country: {
      japan: "日本",
      korea: "韓国",
      taiwan: "台湾",
      newYork: "ニューヨーク"
    },

    game: {
      final: "FINAL",
      upcoming: "UPCOMING",
      finished: "試合終了",
      scheduled: "試合予定",
      international: "国際試合",
      friendly: "親善試合",
      tournament: "大会",
      ahba: "AHBA主催",
      noGames: "該当する試合がありません。"
    },

    gameType: {
      international: "国際試合",
      friendly: "親善試合",
      tournament: "大会",
      ahba: "AHBA主催"
    },

    scheduleStatus: {
      finished: "終了",
      upcoming: "予定"
    },

    nextGame: {
      none: "次の試合はありません。"
    },

    footer: {
      subtitle: "Community・Competition・Connection"
    }

  },


  ko: {

    nav: {
      games: "경기",
      standings: "순위표",
      schedule: "일정",
      leagues: "리그",
      admin: "관리"
    },

    hero: {
      title: "아시아 HCBB를,<br><span>하나의 스코어보드로.</span>",
      description:
        "경기 결과, 순위, 각 리그의 경기 일정을 한 곳에서 확인할 수 있는 Asia HCBB Baseball Alliance 공식 포털입니다.",
      games: "경기 보기",
      schedule: "경기 일정"
    },

    next: {
      title: "NEXT GAME"
    },

    games: {
      eyebrow: "MATCH CENTER",
      title: "경기 결과・일정"
    },

    standings: {
      eyebrow: "STANDINGS",
      title: "순위표"
    },

    schedule: {
      eyebrow: "TIME TABLE",
      title: "리그 일정",
      timezone: "표시 시간대："
    },

    leagues: {
      eyebrow: "LEAGUE INTRODUCTION",
      title: "리그 소개",
      view: "리그 페이지 보기"
    },

    filter: {
      allLeagues: "전체 경기",
      all: "전체 경기",
      upcoming: "예정",
      finished: "종료"
    },

    table: {
      team: "TEAM"
    },

    country: {
      japan: "일본",
      korea: "한국",
      taiwan: "대만",
      newYork: "뉴욕"
    },

    game: {
      final: "FINAL",
      upcoming: "UPCOMING",
      finished: "경기 종료",
      scheduled: "경기 예정",
      international: "국제 경기",
      friendly: "친선 경기",
      tournament: "대회",
      ahba: "AHBA 주최",
      noGames: "해당 경기가 없습니다."
    },

    gameType: {
      international: "국제 경기",
      friendly: "친선 경기",
      tournament: "대회",
      ahba: "AHBA 주최"
    },

    scheduleStatus: {
      finished: "종료",
      upcoming: "예정"
    },

    nextGame: {
      none: "예정된 다음 경기가 없습니다."
    },

    footer: {
      subtitle: "Community・Competition・Connection"
    }

  },


  en: {

    nav: {
      games: "Games",
      standings: "Standings",
      schedule: "Schedule",
      leagues: "Leagues",
      admin: "Admin"
    },

    hero: {
      title: "Asia's HCBB,<br><span>one scoreboard.</span>",
      description:
        "The official Asia HCBB Baseball Alliance portal for game results, standings and league schedules.",
      games: "View Games",
      schedule: "Schedule"
    },

    next: {
      title: "NEXT GAME"
    },

    games: {
      eyebrow: "MATCH CENTER",
      title: "Results & Fixtures"
    },

    standings: {
      eyebrow: "STANDINGS",
      title: "Standings"
    },

    schedule: {
      eyebrow: "TIME TABLE",
      title: "League Schedule",
      timezone: "Timezone："
    },

    leagues: {
      eyebrow: "LEAGUE INTRODUCTION",
      title: "League Introduction",
      view: "VIEW LEAGUE"
    },

    filter: {
      allLeagues: "All Games",
      all: "All Games",
      upcoming: "Upcoming",
      finished: "Finished"
    },

    table: {
      team: "TEAM"
    },

    country: {
      japan: "Japan",
      korea: "Korea",
      taiwan: "Taiwan",
      newYork: "New York"
    },

    game: {
      final: "FINAL",
      upcoming: "UPCOMING",
      finished: "Final",
      scheduled: "Scheduled",
      international: "International",
      friendly: "Friendly",
      tournament: "Tournament",
      ahba: "AHBA Hosted",
      noGames: "No games found."
    },

    gameType: {
      international: "International",
      friendly: "Friendly",
      tournament: "Tournament",
      ahba: "AHBA Hosted"
    },

    scheduleStatus: {
      finished: "Finished",
      upcoming: "Upcoming"
    },

    nextGame: {
      none: "No upcoming games."
    },

    footer: {
      subtitle: "Community・Competition・Connection"
    }

  },


  zh: {

    nav: {
      games: "比赛",
      standings: "排名",
      schedule: "赛程",
      leagues: "联赛",
      admin: "管理"
    },

    hero: {
      title: "亚洲 HCBB，<br><span>汇聚于一个记分板。</span>",
      description:
        "Asia HCBB Baseball Alliance 官方门户，提供比赛结果、排名和各联赛赛程。",
      games: "查看比赛",
      schedule: "赛程"
    },

    next: {
      title: "NEXT GAME"
    },

    games: {
      eyebrow: "MATCH CENTER",
      title: "比赛结果・赛程"
    },

    standings: {
      eyebrow: "STANDINGS",
      title: "排名"
    },

    schedule: {
      eyebrow: "TIME TABLE",
      title: "联赛赛程",
      timezone: "显示时区："
    },

    leagues: {
      eyebrow: "LEAGUE INTRODUCTION",
      title: "联赛介绍",
      view: "查看联赛页面"
    },

    filter: {
      allLeagues: "所有比赛",
      all: "所有比赛",
      upcoming: "即将进行",
      finished: "已结束"
    },

    table: {
      team: "TEAM"
    },

    country: {
      japan: "日本",
      korea: "韩国",
      taiwan: "台湾",
      newYork: "纽约"
    },

    game: {
      final: "FINAL",
      upcoming: "UPCOMING",
      finished: "比赛结束",
      scheduled: "比赛 예정",
      international: "国际比赛",
      friendly: "友谊赛",
      tournament: "赛事",
      ahba: "AHBA主办",
      noGames: "暂无比赛。"
    },

    gameType: {
      international: "国际比赛",
      friendly: "友谊赛",
      tournament: "赛事",
      ahba: "AHBA主办"
    },

    scheduleStatus: {
      finished: "结束",
      upcoming: " 예정"
    },

    nextGame: {
      none: "暂无下一场比赛。"
    },

    footer: {
      subtitle: "Community・Competition・Connection"
    }

  }

};


/* ==================================================
   CURRENT LANGUAGE
================================================== */

let currentLanguage =
  localStorage.getItem("asiaHCBBLanguage") || "ja";


function t(path) {

  const parts = path.split(".");

  let value =
    translations[currentLanguage];

  for (const part of parts) {
    value = value?.[part];
  }

  return value || path;
}


/* ==================================================
   APPLY LANGUAGE
================================================== */

function applyLanguage(lang) {

  if (!translations[lang]) {
    lang = "ja";
  }

  currentLanguage = lang;

  localStorage.setItem(
    "asiaHCBBLanguage",
    lang
  );


  document.documentElement.lang =
    lang === "ja"
      ? "ja"
      : lang;


  $$("[data-i18n]")
    .forEach(element => {

      const key =
        element.dataset.i18n;

      element.textContent =
        t(key);

    });


  $$("[data-i18n-html]")
    .forEach(element => {

      const key =
        element.dataset.i18nHtml;

      element.innerHTML =
        t(key);

    });


  $$(".language-switcher button")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.lang === lang
      );

    });


  updateFilterTexts();

  renderGames();

  renderStandings();

  renderSchedule();

  renderNextGame();

  renderLeagues();

  updateClock();

}


/* ==================================================
   FILTER TEXT
================================================== */

function updateFilterTexts() {

  const currentStatus =
    $("#statusFilter")?.value || "all";


  /*
   * ホームページの試合一覧は
   * 「全リーグのリーグ戦一覧」ではなく、
   * AHBAが公式掲載する試合だけを表示する。
   *
   * そのためリーグ選択フィルターは使用しない。
   */

  if ($("#leagueFilter")) {

    $("#leagueFilter").innerHTML = `
      <option value="all">
        ${t("filter.all")}
      </option>
    `;

    $("#leagueFilter").value = "all";
  }


  if ($("#statusFilter")) {

    $("#statusFilter").innerHTML = `
      <option value="all">
        ${t("filter.all")}
      </option>

      <option value="upcoming">
        ${t("filter.upcoming")}
      </option>

      <option value="finished">
        ${t("filter.finished")}
      </option>
    `;

    $("#statusFilter").value =
      currentStatus;
  }


  /*
   * ホームの順位表も
   * D.standings.current の公式掲載データを使用。
   *
   * D.gamesからリーグ順位を自動生成しない。
   */

  if ($("#standingsLeague")) {

    $("#standingsLeague").innerHTML = `
      <option value="ahba">
        ${t("nav.standings")}
      </option>
    `;

    $("#standingsLeague").value =
      "ahba";
  }

}


/* ==================================================
   LEAGUE NAME
================================================== */

function leagueName(id) {

  const league =
    D.leagues?.find(
      x => x.id === id
    );

  if (!league) {
    return id || "";
  }

  return typeof league.name === "object"

    ? league.name[currentLanguage]
      || league.name.en
      || league.name.ja
      || league.id

    : league.name;
}


/* ==================================================
   GAME LABEL
================================================== */

function gameLabel(game) {

  /*
   * title が設定されている場合
   * 例：
   * title: {
   *   ja: "日本代表 vs 韓国代表",
   *   ko: "...",
   *   en: "...",
   *   zh: "..."
   * }
   */

  if (game.title) {

    if (
      typeof game.title === "object"
    ) {

      return (
        game.title[currentLanguage]
        || game.title.en
        || game.title.ja
        || ""
      );

    }

    return game.title;
  }


  /*
   * 既存データに league が残っている場合
   */

  if (game.league) {
    return leagueName(game.league);
  }


  /*
   * type による表示
   */

  if (game.type) {

    return (
      t(`gameType.${game.type}`)
      || t("gameType.ahba")
    );

  }


  return t("gameType.ahba");

}


/* ==================================================
   TIME
================================================== */

let currentZone =
  "Asia/Tokyo";


const zoneNames = {

  "Asia/Tokyo": {

    ja: "日本",
    ko: "일본",
    en: "Japan",
    zh: "日本"

  },

  "Asia/Seoul": {

    ja: "韓国",
    ko: "한국",
    en: "Korea",
    zh: "韩国"

  },

  "Asia/Taipei": {

    ja: "台湾",
    ko: "대만",
    en: "Taiwan",
    zh: "台湾"

  },

  "America/New_York": {

    ja: "ニューヨーク",
    ko: "뉴욕",
    en: "New York",
    zh: "纽约"

  }

};


function localeName() {

  if (currentLanguage === "ja") {
    return "ja-JP";
  }

  if (currentLanguage === "ko") {
    return "ko-KR";
  }

  if (currentLanguage === "zh") {
    return "zh-CN";
  }

  return "en-US";

}


function fmtDate(
  iso,
  zone = currentZone
) {

  if (!iso) {
    return "—";
  }

  return new Intl.DateTimeFormat(
    localeName(),
    {
      timeZone: zone,
      month: "numeric",
      day: "numeric",
      weekday: "short"
    }
  ).format(
    new Date(iso)
  );

}


function fmtTime(
  iso,
  zone = currentZone
) {

  if (!iso) {
    return "—";
  }

  return new Intl.DateTimeFormat(
    localeName(),
    {
      timeZone: zone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }
  ).format(
    new Date(iso)
  );

}


/* ==================================================
   CLOCK
================================================== */

function updateClock() {

  const zone =
    zoneNames[currentZone]
      ? currentZone
      : "Asia/Tokyo";


  const name =
    zoneNames[zone]?.[currentLanguage]
    || zoneNames[zone]?.ja
    || zone;


  const clock =
    $("#clock");

  if (clock) {

    clock.textContent =

      new Intl.DateTimeFormat(
        localeName(),
        {
          timeZone: zone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        }
      ).format(
        new Date()
      );

  }


  const tz =
    $("#tz");

  if (tz) {
    tz.textContent = name;
  }

}


/* ==================================================
   NEXT GAME
================================================== */

function renderNextGame() {

  const games =
    Array.isArray(D.games)
      ? D.games
      : [];


  const game =
    [...games]
      .filter(
        g =>
          g.status === "upcoming"
      )
      .sort(
        (a, b) =>
          new Date(a.time) -
          new Date(b.time)
      )[0];


  if (!game) {

    if ($("#nextGame")) {
      $("#nextGame").innerHTML =
        t("nextGame.none");
    }

    if ($("#tickerText")) {
      $("#tickerText").textContent =
        t("nextGame.none");
    }

    return;
  }


  const label =
    gameLabel(game);


  if ($("#nextGame")) {

    $("#nextGame").innerHTML = `

      <div class="next-time">
        ${fmtTime(game.time)}
      </div>

      <div class="next-date">
        ${fmtDate(game.time)}
        ・
        ${label}
      </div>

      <div class="matchup">

        <div class="team">
          ${game.home}
        </div>

        <div class="vs">
          VS
        </div>

        <div class="team">
          ${game.away}
        </div>

      </div>

    `;

  }


  if ($("#tickerText")) {

    $("#tickerText").textContent =
      `${label} — ${game.home} vs ${game.away} / ${fmtDate(game.time)} ${fmtTime(game.time)}`;

  }

}


/* ==================================================
   GAMES
================================================== */

function renderGames() {

  const status =
    $("#statusFilter")?.value
    || "all";


  /*
   * 重要：
   *
   * ここでは D.games に入っている
   * 「AHBA公式掲載試合」のみを表示。
   *
   * 各リーグの全試合を
   * 自動表示することはしない。
   */

  const games =
    [...(D.games || [])]
      .filter(
        game =>
          status === "all"
          || game.status === status
      )
      .sort(
        (a, b) =>
          new Date(a.time) -
          new Date(b.time)
      );


  if (!games.length) {

    if ($("#gamesGrid")) {

      $("#gamesGrid").innerHTML =
        `<p>${t("game.noGames")}</p>`;

    }

    return;
  }


  if (!$("#gamesGrid")) {
    return;
  }


  $("#gamesGrid").innerHTML =

    games
      .map(game => `

        <article class="game">

          <div class="game-top">

            <span class="league-tag">

              ${gameLabel(game)}

              ${
                game.round
                  ? `・${game.round}`
                  : ""
              }

            </span>


            <span
              class="game-status ${game.status}"
            >

              ${
                game.status === "finished"
                  ? t("game.final")
                  : t("game.upcoming")
              }

            </span>

          </div>


          <div class="scoreline">

            <div>

              <div class="score-label">
                ${game.home}
              </div>

              <div class="score">
                ${game.homeScore ?? "—"}
              </div>

            </div>


            <div class="dash">
              –
            </div>


            <div>

              <div class="score-label">
                ${game.away}
              </div>

              <div class="score">
                ${game.awayScore ?? "—"}
              </div>

            </div>

          </div>


          <div class="game-foot">

            <span>
              ${fmtDate(game.time)}
              ${fmtTime(game.time)}
            </span>

            <span>

              ${
                game.status === "finished"
                  ? t("game.finished")
                  : t("game.scheduled")
              }

            </span>

          </div>

        </article>

      `)
      .join("");

}


/* ==================================================
   STANDINGS
================================================== */

/*
 * ホームページの順位表は
 * D.standings.current をそのまま使用。
 *
 * D.games から自動的にリーグ順位を
 * 計算する方式にはしない。
 */

function buildStandings() {

  const standings =
    D.standings?.current;


  return Array.isArray(standings)
    ? standings
    : [];

}


function renderStandings() {

  const rows =
    buildStandings();


  if (!$("#standingsBody")) {
    return;
  }


  $("#standingsBody").innerHTML =

    rows.length

      ? rows
          .map(
            (row, index) => {

              const pct =
                row.g
                  ? row.w / row.g
                  : 0;


              const diff =
                (row.rs ?? 0)
                -
                (row.ra ?? 0);


              return `

                <tr>

                  <td>
                    ${index + 1}
                  </td>

                  <td>
                    ${row.team ?? "—"}
                  </td>

                  <td>
                    ${row.g ?? 0}
                  </td>

                  <td>
                    ${row.w ?? 0}
                  </td>

                  <td>
                    ${row.l ?? 0}
                  </td>

                  <td>

                    ${
                      row.g

                        ? pct
                            .toFixed(3)
                            .replace(
                              "0.",
                              "."
                            )

                        : "—"
                    }

                  </td>

                  <td>
                    ${row.rs ?? 0}
                  </td>

                  <td>
                    ${row.ra ?? 0}
                  </td>

                  <td>

                    ${
                      diff > 0
                        ? "+"
                        : ""
                    }

                    ${diff}

                  </td>

                </tr>

              `;

            }
          )
          .join("")


      : `

          <tr>

            <td colspan="9">

              ${t("game.noGames")}

            </td>

          </tr>

        `;

}


/* ==================================================
   SCHEDULE
================================================== */

function renderSchedule() {

  const games =
    [...(D.games || [])]
      .sort(
        (a, b) =>
          new Date(a.time) -
          new Date(b.time)
      );


  if (!$("#scheduleList")) {
    return;
  }


  if (!games.length) {

    $("#scheduleList").innerHTML =
      `<p>${t("game.noGames")}</p>`;

  }

  else {

    $("#scheduleList").innerHTML =

      games
        .map(
          game => `

            <div class="schedule-item">


              <div>

                <div class="sched-time">
                  ${fmtTime(game.time)}
                </div>

                <div class="sched-date">
                  ${fmtDate(game.time)}
                </div>

              </div>


              <div>

                <div class="sched-league">
                  ${gameLabel(game)}
                </div>


                <div class="sched-match">

                  ${game.home}

                  <span class="dash">
                    vs
                  </span>

                  ${game.away}

                </div>

              </div>


              <div class="sched-status">

                ${
                  game.status === "finished"

                    ? t(
                        "scheduleStatus.finished"
                      )

                    : t(
                        "scheduleStatus.upcoming"
                      )
                }

              </div>


            </div>

          `
        )
        .join("");

  }


  if ($("#zoneLabel")) {

    const zone =
      zoneNames[currentZone];


    $("#zoneLabel").textContent =
      zone?.[currentLanguage]
      || zone?.ja
      || currentZone;

  }

}


/* ==================================================
   LEAGUES
================================================== */

function renderLeagues() {

  if (!$("#leagueCards")) {
    return;
  }


  const lang =
    currentLanguage;


  const leagues =
    Array.isArray(D.leagues)
      ? D.leagues
      : [];


  $("#leagueCards").innerHTML =

    leagues
      .map(league => {

        const name =

          typeof league.name === "object"

            ? league.name[lang]
              || league.name.en
              || league.name.ja
              || league.id

            : league.name;


        const country =

          typeof league.country === "object"

            ? league.country[lang]
              || league.country.en
              || league.country.ja
              || ""

            : league.country;


        const description =

          typeof league.description === "object"

            ? league.description[lang]
              || league.description.en
              || league.description.ja
              || ""

            : league.description;


        return `

          <a

            href="league.html?id=${encodeURIComponent(
              league.id
            )}"

            class="league-card league-link"

          >

            <div class="league-code">
              ${league.id}
            </div>


            <h3>
              ${name}
            </h3>


            <p>

              ${country}

              <br>

              ${description}

            </p>


            <div class="league-view">

              <span>
                ${t("leagues.view")}
              </span>

              <span>
                →
              </span>

            </div>


          </a>

        `;

      })
      .join("");

}


/* ==================================================
   LANGUAGE BUTTONS
================================================== */

$$(".language-switcher button")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        applyLanguage(
          button.dataset.lang
        );

      }
    );

  });


/* ==================================================
   EVENT LISTENERS
================================================== */

$("#leagueFilter")
  ?.addEventListener(
    "change",
    renderGames
  );


$("#statusFilter")
  ?.addEventListener(
    "change",
    renderGames
  );


$("#standingsLeague")
  ?.addEventListener(
    "change",
    renderStandings
  );


/* ==================================================
   TIMEZONE BUTTONS
================================================== */

$$(".timezone-tabs button")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const selectedZone =
          button.dataset.zone;


        /*
         * 不正なタイムゾーンは無視
         */

        if (
          !zoneNames[selectedZone]
        ) {
          return;
        }


        /*
         * 現在のタイムゾーンを変更
         */

        currentZone =
          selectedZone;


        /*
         * 選択状態を更新
         */

        $$(".timezone-tabs button")
          .forEach(btn => {

            btn.classList.toggle(
              "active",
              btn.dataset.zone
                === currentZone
            );

          });


        /*
         * 時計を更新
         */

        updateClock();


        /*
         * 時間表を更新
         */

        renderSchedule();


        /*
         * NEXT GAMEを更新
         */

        renderNextGame();

      }
    );

  });


/* ==================================================
   CLOCK AUTO UPDATE
================================================== */

setInterval(
  updateClock,
  1000
);


/* ==================================================
   START
================================================== */

updateClock();

updateFilterTexts();

renderGames();

renderStandings();

renderSchedule();

renderNextGame();

renderLeagues();

applyLanguage(
  currentLanguage
);
