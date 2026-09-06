const D = ALLIANCE_DATA;

const $ = selector =>
  document.querySelector(selector);

const $$ = selector =>
  document.querySelectorAll(selector);



/*
========================================
 BASIC
========================================
*/

const leagueName = id => {

  const league =
    D.leagues.find(
      x => x.id === id
    );

  return league
    ? league.name
    : id;
};



/*
========================================
 TIME
========================================
*/

let currentZone =
  "Asia/Tokyo";


const zoneNames = {

  "Asia/Tokyo":
    "日本",

  "Asia/Seoul":
    "韓国",

  "Asia/Taipei":
    "台湾",

  "Asia/Shanghai":
    "中国"

};



function fmtDate(
  iso,
  zone = currentZone
) {

  const d =
    new Date(iso);

  return new Intl.DateTimeFormat(
    "ja-JP",
    {
      timeZone: zone,
      month: "numeric",
      day: "numeric",
      weekday: "short"
    }
  ).format(d);

}



function fmtTime(
  iso,
  zone = currentZone
) {

  return new Intl.DateTimeFormat(
    "ja-JP",
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



/*
========================================
 CLOCK
========================================
*/

function updateClock() {

  const now =
    new Date();

  $("#clock").textContent =

    new Intl.DateTimeFormat(
      "ja-JP",
      {
        timeZone:
          currentZone,

        hour:
          "2-digit",

        minute:
          "2-digit",

        second:
          "2-digit",

        hour12:
          false
      }
    ).format(now);


  $("#tz").textContent =
    zoneNames[currentZone] ||
    "LOCAL";
}


setInterval(
  updateClock,
  1000
);

updateClock();



/*
========================================
 POPULATE
========================================
*/

function populate() {

  const options =
    D.leagues
      .map(
        league =>

        `<option value="${league.id}">
          ${league.name}
        </option>`
      )
      .join("");


  $("#leagueFilter")
    .insertAdjacentHTML(
      "beforeend",
      options
    );


  $("#standingsLeague")
    .innerHTML =
    options;


  renderGames();

  renderStandings("A");

  renderSchedule();

  renderLeagues();

  renderNextGame();
}



/*
========================================
 NEXT GAME
========================================
*/

function renderNextGame() {

  const games =

    D.games
      .filter(
        game =>
          game.status ===
          "upcoming"
      )
      .sort(
        (a,b) =>
          new Date(a.time) -
          new Date(b.time)
      );


  const game =
    games[0];


  if (!game) {

    $("#nextGame").innerHTML =
      "次の試合はありません。";

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



/*
========================================
 GAMES
========================================
*/

function renderGames() {

  const league =
    $("#leagueFilter").value;

  const status =
    $("#statusFilter").value;


  const games =

    D.games

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

      "<p>該当する試合がありません。</p>";

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
                game.status ===
                "finished"

                ? "FINAL"

                : "UPCOMING"
              }

            </span>

          </div>



          <div class="scoreline">

            <div>

              <div class="score-label">
                ${game.home}
              </div>

              <div class="score">
                ${
                  game.homeScore ??
                  "—"
                }
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
                ${
                  game.awayScore ??
                  "—"
                }
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
                game.status ===
                "finished"

                ? "試合終了"

                : "試合予定"
              }

            </span>

          </div>

        </article>

      `)

      .join("");

}



/*
========================================
 STANDINGS
========================================
*/

function renderStandings(
  leagueId
) {

  const rows =
    D.standings[leagueId] ||
    [];


  $("#standingsBody").innerHTML =

    rows
      .map(
        (row,index) => {

          const diff =
            row[5] -
            row[6];


          const pct =
            row[4];


          return `

            <tr>

              <td>
                ${index + 1}
              </td>

              <td>
                ${row[0]}
              </td>

              <td>
                ${row[1]}
              </td>

              <td>
                ${row[2]}
              </td>

              <td>
                ${row[3]}
              </td>

              <td>
                ${
                  pct
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
                ${row[5]}
              </td>

              <td>
                ${row[6]}
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
      )

      .join("");
}



/*
========================================
 SCHEDULE
========================================
*/

function renderSchedule() {

  const games =

    [...D.games]
      .sort(
        (a,b) =>
          new Date(a.time) -
          new Date(b.time)
      );


  $("#scheduleList").innerHTML =

    games
      .map(game => `

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
              game.status ===
              "finished"

              ? "終了"

              : "予定"
            }

            <br>

            ${zoneNames[currentZone]}

          </div>

        </div>

      `)

      .join("");


  $("#zoneLabel").textContent =
    currentZone;
}



/*
========================================
 LEAGUES
========================================
*/

function renderLeagues() {

  $("#leagueCards").innerHTML =

    D.leagues
      .map(
        league => `

          <article class="league-card">

            <div class="league-code">
              ${league.id}
            </div>

            <h3>
              ${league.name}
            </h3>

            <p>

              ${league.country}

              <br>

              ${league.description}

            </p>

          </article>

        `
      )

      .join("");
}



/*
========================================
 EVENT LISTENERS
========================================
*/

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



/*
========================================
 TIMEZONE BUTTONS
========================================
*/

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



/*
========================================
 START
========================================
*/

populate();
