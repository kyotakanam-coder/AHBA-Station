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
      allLeagues: "全リーグ",
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
      china: "中国"
    },

    game: {
      final: "FINAL",
      upcoming: "UPCOMING",
      finished: "試合終了",
      scheduled: "試合予定",
      noGames: "該当する試合がありません。"
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
      allLeagues: "전체 리그",
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
      china: "중국"
    },

    game: {
      final: "FINAL",
      upcoming: "UPCOMING",
      finished: "경기 종료",
      scheduled: "경기 예정",
      noGames: "해당 경기가 없습니다."
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
      allLeagues: "All Leagues",
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
      china: "China"
    },

    game: {
      final: "FINAL",
      upcoming: "UPCOMING",
      finished: "Final",
      scheduled: "Scheduled",
      noGames: "No games found."
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
      allLeagues: "所有联赛",
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
      china: "中国"
    },

    game: {
      final: "FINAL",
      upcoming: "UPCOMING",
      finished: "比赛结束",
      scheduled: "比赛 예정",
      noGames: "暂无比赛。"
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

  const parts =
    path.split(".");

  let value =
    translations[currentLanguage];

  for (const part of parts) {

    value =
      value?.[part];

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

  renderStandings(
    $("#standingsLeague").value || "A"
  );

  renderSchedule();

  renderNextGame();

  renderLeagues();

}


/* ==================================================
   FILTER TEXT
================================================== */

function updateFilterTexts() {

  $("#leagueFilter").innerHTML =

    `<option value="all">
      ${t("filter.allLeagues")}
    </option>` +

    D.leagues
      .map(league => `
        <option value="${league.id}">
          ${league.name}
        </option>
      `)
      .join("");


  const currentStatus =
    $("#statusFilter").value || "all";


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


  const currentLeague =
    $("#standingsLeague").value || "A";


  $("#standingsLeague").innerHTML =

    D.leagues
      .map(league => `
        <option value="${league.id}">
          ${league.name}
        </option>
      `)
      .join("");


  $("#standingsLeague").value =
    currentLeague;

}


/* ==================================================
   LEAGUE NAME
================================================== */

function leagueName(id) {

  const league =
    D.leagues.find(
      x => x.id === id
    );

  return league
    ? league.name
    : id;

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

  "Asia/Shanghai": {
    ja: "中国",
    ko: "중국",
    en: "China",
    zh: "中国"
  }

};


function fmtDate(
  iso,
  zone = currentZone
) {

  return new Intl.DateTimeFormat(
    currentLanguage === "ja"
      ? "ja-JP"
      : currentLanguage === "ko"
        ? "ko-KR"
        : currentLanguage === "zh"
          ? "zh-CN"
          : "en-US",
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

  return new Intl.DateTimeFormat(
    currentLanguage === "ja"
      ? "ja-JP"
      : currentLanguage === "ko"
        ? "ko-KR"
        : currentLanguage === "zh"
          ? "zh-CN"
          : "en-US",
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

  $("#clock").textContent =

    new Intl.DateTimeFormat(
      "ja-JP",
      {
        timeZone: currentZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      }
    ).format(
      new Date()
    );


  $("#tz").textContent =
    zoneNames[currentZone][currentLanguage];

}


setInterval(
  updateClock,
  1000
);


/* ==================================================
   NEXT GAME
================================================== */

function renderNextGame() {

  const game =

    [...D.games]
      .filter(
        g =>
          g.status === "upcoming"
      )
      .sort(
        (a,b) =>
          new Date(a.time) -
          new Date(b.time)
      )[0];


  if (!game) {

    $("#nextGame").innerHTML =
      t("nextGame.none");

    $("#tickerText").textContent =
      t("nextGame.none");

    return;

  }


  $("#nextGame").innerHTML = `

    <div class="next-time">
      ${fmtTime(game.time)}
    </div>

    <div class="next-date">

      ${fmtDate(game.time)}
      ・
      ${leagueName(game.league)}

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


  $("#tickerText").textContent =

    `${leagueName(game.league)}
     — ${game.home}
     vs
     ${game.away}
     /
     ${fmtDate(game.time)}
     ${fmtTime(game.time)}`;

}


/* ==================================================
   GAMES
================================================== */

function renderGames() {

  const league =
    $("#leagueFilter").value;

  const status =
    $("#statusFilter").value;


  const games =

    [...D.games]

      .filter(game =>

        (
          league === "all" ||
          game.league === league
        )

        &&

        (
          status === "all" ||
          game.status === status
        )

      )

      .sort(
        (a,b) =>
          new Date(a.time) -
          new Date(b.time)
      );


  if (!games.length) {

    $("#gamesGrid").innerHTML =
      `<p>${t("game.noGames")}</p>`;

    return;

  }


  $("#gamesGrid").innerHTML =

    games
      .map(game => `

        <article class="game">

          <div class="game-top">

            <span class="league-tag">

              ${leagueName(game.league)}
              ・
              ${game.round}

            </span>


            <span
              class="game-status
              ${game.status}"
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

function buildStandings(
  leagueId
) {

  const teams = {};


  D.games
    .filter(
      g =>
        g.league === leagueId
    )
    .forEach(game => {

      [
        game.home,
        game.away
      ].forEach(team => {

        if (!teams[team]) {

          teams[team] = {

            team,
            g: 0,
            w: 0,
            l: 0,
            rs: 0,
            ra: 0

          };

        }

      });


      if (
        game.status !== "finished" ||
        game.homeScore == null ||
        game.awayScore == null
      ) {
        return;
      }


      const home =
        teams[game.home];

      const away =
        teams[game.away];


      home.g++;
      away.g++;


      home.rs +=
        game.homeScore;

      home.ra +=
        game.awayScore;


      away.rs +=
        game.awayScore;

      away.ra +=
        game.homeScore;


      if (
        game.homeScore >
        game.awayScore
      ) {

        home.w++;
        away.l++;

      }

      else if (
        game.awayScore >
        game.homeScore
      ) {

        away.w++;
        home.l++;

      }

    });


  return Object.values(teams)
    .sort(
      (a,b) => {

        const ap =
          a.g
            ? a.w / a.g
            : 0;

        const bp =
          b.g
            ? b.w / b.g
            : 0;

        return (
          bp - ap
        )

        ||

        (
          (b.rs - b.ra) -
          (a.rs - a.ra)
        )

        ||

        (
          b.rs - a.rs
        );

      }
    );

}


function renderStandings(
  leagueId
) {

  const rows =
    buildStandings(
      leagueId
    );


  $("#standingsBody").innerHTML =

    rows.length

      ? rows.map(
          (row,index) => {

            const pct =
              row.g
                ? row.w / row.g
                : 0;

            const diff =
              row.rs -
              row.ra;


            return `

              <tr>

                <td>
                  ${index + 1}
                </td>

                <td>
                  ${row.team}
                </td>

                <td>
                  ${row.g}
                </td>

                <td>
                  ${row.w}
                </td>

                <td>
                  ${row.l}
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
                  ${row.rs}
                </td>

                <td>
                  ${row.ra}
                </td>

                <td>
                  ${
                    diff > 0
                      ? "+"
                      : ""
                  }${diff}
                </td>

              </tr>

            `;

          }
        ).join("")

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

    [...D.games]
      .sort(
        (a,b) =>
          new Date(a.time) -
          new Date(b.time)
      );


  $("#scheduleList").innerHTML =

    games.map(
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
              ${leagueName(game.league)}
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
                ? t("scheduleStatus.finished")
                : t("scheduleStatus.upcoming")
            }

          </div>

        </div>

      `
    )
    .join("");


  $("#zoneLabel").textContent =
    currentZone;

}


/* ==================================================
   LEAGUES
================================================== */

function renderLeagues() {
  const lang = currentLanguage;

  $("#leagueCards").innerHTML =
    D.leagues
      .map(league => {
        const country =
          typeof league.country === "object"
            ? league.country[lang] || league.country.en
            : league.country;

        const description =
          typeof league.description === "object"
            ? league.description[lang] || league.description.en
            : league.description;

        return `
          <a
            href="league.html?id=${encodeURIComponent(league.id)}"
            class="league-card league-link"
          >
            <div class="league-code">${league.id}</div>

            <h3>${league.name}</h3>

            <p>
              ${country}
              <br>
              ${description}
            </p>

            <div class="league-view">
              <span>${t("leagues.view")}</span>
              <span>→</span>
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
  .addEventListener(
    "change",
    renderGames
  );


$("#statusFilter")
  .addEventListener(
    "change",
    renderGames
  );


$("#standingsLeague")
  .addEventListener(
    "change",
    event => {

      renderStandings(
        event.target.value
      );

    }
  );


/* ==================================================
   TIMEZONE BUTTONS
================================================== */

$$(".timezone-tabs button")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        $$(".timezone-tabs button")
          .forEach(
            x =>
              x.classList.remove(
                "active"
              )
          );


        button.classList.add(
          "active"
        );


        currentZone =
          button.dataset.zone;


        updateClock();

        renderSchedule();

        renderNextGame();

      }
    );

  });


/* ==================================================
   START
================================================== */

updateFilterTexts();

renderLeagues();

renderGames();

renderStandings("A");

renderSchedule();

renderNextGame();

applyLanguage(
  currentLanguage
);
