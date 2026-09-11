/* =========================================================
   Asia HCBB Baseball Alliance
   game.js
   ========================================================= */

(function () {

  "use strict";


  /* =======================================================
     LANGUAGE
     ======================================================= */

  const translations = {

    ja: {

      nav: {
        home: "ホーム",
        matches: "試合情報",
        standings: "順位表",
        schedule: "日程",
        leagues: "リーグ紹介"
      },

      game: {
        back: "← 試合情報へ戻る",
        eyebrow: "GAME DETAILS",

        scoreboardEyebrow: "SCOREBOARD",
        scoreboard: "スコアボード",

        pitchingEyebrow: "PITCHING",
        pitching: "投手成績",

        homeRunsEyebrow: "HOME RUNS",
        homeRuns: "ホームラン",

        notesEyebrow: "GAME NOTES",
        notes: "試合メモ",

        win: "勝利投手",
        loss: "敗戦投手",
        save: "セーブ",
        holds: "ホールド",

        inning: "回",
        runs: "点",

        noData: "記録なし",

        notFound: "試合が見つかりません",
        notFoundDescription: "指定された試合は存在しません。",
        return: "試合情報へ戻る",

        international: "国際試合",
        friendly: "親善試合",
        tournament: "大会",
        ahba: "AHBA公式試合"
      }

    },


    ko: {

      nav: {
        home: "홈",
        matches: "경기 정보",
        standings: "순위표",
        schedule: "일정",
        leagues: "리그 소개"
      },

      game: {
        back: "← 경기 정보로 돌아가기",
        eyebrow: "GAME DETAILS",

        scoreboardEyebrow: "SCOREBOARD",
        scoreboard: "스코어보드",

        pitchingEyebrow: "PITCHING",
        pitching: "투수 기록",

        homeRunsEyebrow: "HOME RUNS",
        homeRuns: "홈런",

        notesEyebrow: "GAME NOTES",
        notes: "경기 메모",

        win: "승리 투수",
        loss: "패전 투수",
        save: "세이브",
        holds: "홀드",

        inning: "회",
        runs: "점",

        noData: "기록 없음",

        notFound: "경기를 찾을 수 없습니다",
        notFoundDescription: "지정된 경기가 존재하지 않습니다.",
        return: "경기 정보로 돌아가기",

        international: "국제 경기",
        friendly: "친선 경기",
        tournament: "대회",
        ahba: "AHBA 공식 경기"
      }

    },


    en: {

      nav: {
        home: "Home",
        matches: "Matches",
        standings: "Standings",
        schedule: "Schedule",
        leagues: "Leagues"
      },

      game: {
        back: "← Back to Matches",
        eyebrow: "GAME DETAILS",

        scoreboardEyebrow: "SCOREBOARD",
        scoreboard: "Scoreboard",

        pitchingEyebrow: "PITCHING",
        pitching: "Pitching",

        homeRunsEyebrow: "HOME RUNS",
        homeRuns: "Home Runs",

        notesEyebrow: "GAME NOTES",
        notes: "Game Notes",

        win: "Winning Pitcher",
        loss: "Losing Pitcher",
        save: "Save",
        holds: "Holds",

        inning: "th",
        runs: "run(s)",

        noData: "No record",

        notFound: "Game Not Found",
        notFoundDescription: "The requested game does not exist.",
        return: "Back to Matches",

        international: "International",
        friendly: "Friendly",
        tournament: "Tournament",
        ahba: "AHBA Official Game"
      }

    },


    zh: {

      nav: {
        home: "首页",
        matches: "比赛信息",
        standings: "积分榜",
        schedule: "赛程",
        leagues: "联赛介绍"
      },

      game: {
        back: "← 返回比赛信息",
        eyebrow: "GAME DETAILS",

        scoreboardEyebrow: "SCOREBOARD",
        scoreboard: "记分板",

        pitchingEyebrow: "PITCHING",
        pitching: "投手记录",

        homeRunsEyebrow: "HOME RUNS",
        homeRuns: "本垒打",

        notesEyebrow: "GAME NOTES",
        notes: "比赛备注",

        win: "胜投",
        loss: "败投",
        save: "救援成功",
        holds: "中继成功",

        inning: "局",
        runs: "分",

        noData: "暂无记录",

        notFound: "找不到比赛",
        notFoundDescription: "指定的比赛不存在。",
        return: "返回比赛信息",

        international: "国际比赛",
        friendly: "友谊赛",
        tournament: "赛事",
        ahba: "AHBA官方比赛"
      }

    }

  };


  let currentLanguage =
    localStorage.getItem("asiaHCBBLanguage") || "ja";


  if (!translations[currentLanguage]) {
    currentLanguage = "ja";
  }


  /* =======================================================
     HELPERS
     ======================================================= */

  function $(selector) {
    return document.querySelector(selector);
  }


  function escapeHTML(value) {

    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  function localized(value) {

    if (
      value &&
      typeof value === "object"
    ) {

      return (
        value[currentLanguage] ??
        value.ja ??
        value.en ??
        Object.values(value)[0] ??
        ""
      );

    }

    return value ?? "";

  }


  function t(key) {

    const parts = key.split(".");

    let value = translations[currentLanguage];

    for (const part of parts) {

      if (
        value &&
        Object.prototype.hasOwnProperty.call(value, part)
      ) {

        value = value[part];

      } else {

        return key;

      }

    }

    return value;

  }


  /* =======================================================
     LANGUAGE
     ======================================================= */

  function applyLanguage() {

    document.documentElement.lang = currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {

      const key = element.dataset.i18n;

      const value = t(key);

      if (value !== key) {
        element.textContent = value;
      }

    });


    document.querySelectorAll("[data-lang]").forEach((button) => {

      button.classList.toggle(
        "active",
        button.dataset.lang === currentLanguage
      );

    });


    renderGame();

  }


  /* =======================================================
     GAME ID
     ======================================================= */

  function getGameId() {

    const params = new URLSearchParams(
      window.location.search
    );

    return params.get("id");

  }


  /* =======================================================
     GAME
     ======================================================= */

  function getGame() {

    if (
      typeof ALLIANCE_DATA === "undefined" ||
      !Array.isArray(ALLIANCE_DATA.games)
    ) {

      return null;

    }

    const gameId = getGameId();

    return ALLIANCE_DATA.games.find(
      game => String(game.id) === String(gameId)
    ) || null;

  }


  /* =======================================================
     GAME TYPE
     ======================================================= */

  function getGameType(game) {

    const types = {
      international: t("game.international"),
      friendly: t("game.friendly"),
      tournament: t("game.tournament")
    };

    return (
      types[game.type] ||
      t("game.ahba")
    );

  }


  /* =======================================================
     DATE
     ======================================================= */

  function formatDate(value) {

    if (!value) {
      return "--";
    }


    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return value;
    }


    return new Intl.DateTimeFormat(
      currentLanguage === "ja"
        ? "ja-JP"
        : currentLanguage === "ko"
        ? "ko-KR"
        : currentLanguage === "zh"
        ? "zh-CN"
        : "en-US",
      {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit"
      }
    ).format(date);

  }


  /* =======================================================
     SCOREBOARD
     ======================================================= */

  function renderScoreboard(game) {

    const table = $("#scoreboard");

    if (!table) {
      return;
    }


    const thead = table.querySelector("thead");
    const tbody = table.querySelector("tbody");


    thead.innerHTML = "";
    tbody.innerHTML = "";


    const detail = game.detail;


    if (
      !detail ||
      !detail.innings
    ) {

      tbody.innerHTML = `
        <tr>
          <td colspan="12" class="empty-result">
            ${escapeHTML(t("game.noData"))}
          </td>
        </tr>
      `;

      return;

    }


    const homeInnings =
      Array.isArray(detail.innings.home)
        ? detail.innings.home
        : [];


    const awayInnings =
      Array.isArray(detail.innings.away)
        ? detail.innings.away
        : [];


    const inningCount = Math.max(
      homeInnings.length,
      awayInnings.length
    );


    let headerHTML = `
      <tr>
        <th></th>
    `;


    for (let i = 0; i < inningCount; i++) {

      headerHTML += `
        <th>${i + 1}</th>
      `;

    }


    headerHTML += `
        <th class="total">R</th>
      </tr>
    `;


    thead.innerHTML = headerHTML;


    const awayTotal =
      awayInnings.reduce(
        (sum, value) => sum + Number(value || 0),
        0
      );


    const homeTotal =
      homeInnings.reduce(
        (sum, value) => sum + Number(value || 0),
        0
      );


    let awayHTML = `
      <tr>
        <th>
          ${escapeHTML(game.away)}
        </th>
    `;


    for (let i = 0; i < inningCount; i++) {

      awayHTML += `
        <td>
          ${escapeHTML(awayInnings[i] ?? 0)}
        </td>
      `;

    }


    awayHTML += `
        <td class="total">
          ${awayTotal}
        </td>
      </tr>
    `;


    let homeHTML = `
      <tr>
        <th>
          ${escapeHTML(game.home)}
        </th>
    `;


    for (let i = 0; i < inningCount; i++) {

      homeHTML += `
        <td>
          ${escapeHTML(homeInnings[i] ?? 0)}
        </td>
      `;

    }


    homeHTML += `
        <td class="total">
          ${homeTotal}
        </td>
      </tr>
    `;


    tbody.innerHTML =
      awayHTML +
      homeHTML;

  }


  /* =======================================================
     PITCHING
     ======================================================= */

  function renderPitching(game) {

    const container = $("#pitchingResults");

    if (!container) {
      return;
    }


    container.innerHTML = "";


    const pitching =
      game.detail &&
      game.detail.pitching
        ? game.detail.pitching
        : {};


    const rows = [

      {
        label: t("game.win"),
        value: pitching.win
      },

      {
        label: t("game.loss"),
        value: pitching.loss
      },

      {
        label: t("game.save"),
        value: pitching.save
      }

    ];


    rows.forEach(row => {

      const value =
        row.value ||
        t("game.noData");


      container.insertAdjacentHTML(
        "beforeend",
        `
          <div class="result-row">

            <div class="result-label">
              ${escapeHTML(row.label)}
            </div>

            <div class="result-value">
              ${escapeHTML(value)}
            </div>

          </div>
        `
      );

    });


    const holds =
      Array.isArray(pitching.holds)
        ? pitching.holds
        : [];


    let holdText = t("game.noData");


    if (holds.length > 0) {

      holdText = holds
        .map(player => escapeHTML(player))
        .join("<br>");

    }


    container.insertAdjacentHTML(
      "beforeend",
      `
        <div class="result-row">

          <div class="result-label">
            ${escapeHTML(t("game.holds"))}
          </div>

          <div class="result-value">
            ${holdText}
          </div>

        </div>
      `
    );

  }


  /* =======================================================
     HOME RUNS
     ======================================================= */

  function renderHomeRuns(game) {

    const container = $("#homeRuns");

    if (!container) {
      return;
    }


    container.innerHTML = "";


    const homeRuns =
      game.detail &&
      Array.isArray(game.detail.homeRuns)
        ? game.detail.homeRuns
        : [];


    if (homeRuns.length === 0) {

      container.innerHTML = `
        <div class="empty-result">
          ${escapeHTML(t("game.noData"))}
        </div>
      `;

      return;

    }


    homeRuns.forEach(homeRun => {

      const team =
        homeRun.team === "home"
          ? game.home
          : game.away;


      const inning =
        Number(homeRun.inning || 0);


      const runs =
        Number(homeRun.runs || 1);


      const runText =
        runs === 1
          ? "Solo"
          : `${runs}-run`;


      container.insertAdjacentHTML(
        "beforeend",
        `
          <div class="result-row hr-row">

            <div class="hr-team">
              ${escapeHTML(team)}
            </div>

            <div class="hr-player">
              ${escapeHTML(homeRun.player)}
            </div>

            <div class="hr-info">
              ${escapeHTML(String(inning))}
              ${escapeHTML(t("game.inning"))}
              ・
              ${escapeHTML(runText)}
            </div>

          </div>
        `
      );

    });

  }


  /* =======================================================
     NOTES
     ======================================================= */

  function renderNotes(game) {

    const section = $("#notesSection");
    const notes = $("#gameNotes");

    if (!section || !notes) {
      return;
    }


    const value =
      game.detail &&
      game.detail.notes
        ? localized(game.detail.notes)
        : "";


    if (value) {

      notes.textContent = value;

      section.hidden = false;

    } else {

      notes.textContent = "";

      section.hidden = true;

    }

  }


  /* =======================================================
     MAIN RENDER
     ======================================================= */

  function renderGame() {

    const game = getGame();


    const content =
      document.querySelector(".game-hero");


    const notFound =
      $("#gameNotFound");


    if (!game) {

      if (content) {
        content.hidden = true;
      }

      if (notFound) {
        notFound.hidden = false;
      }

      document.title =
        "Game Not Found | Asia HCBB Baseball Alliance";

      return;

    }


    if (content) {
      content.hidden = false;
    }


    if (notFound) {
      notFound.hidden = true;
    }


    /* -----------------------------------------------
       Hero
       ----------------------------------------------- */

    const gameType = $("#gameType");
    const gameDate = $("#gameDate");
    const homeTeam = $("#homeTeam");
    const awayTeam = $("#awayTeam");
    const homeScore = $("#homeScore");
    const awayScore = $("#awayScore");
    const gameStatus = $("#gameStatus");


    if (gameType) {
      gameType.textContent =
        getGameType(game);
    }


    if (gameDate) {
      gameDate.textContent =
        formatDate(game.time);
    }


    if (homeTeam) {
      homeTeam.textContent =
        game.home || "--";
    }


    if (awayTeam) {
      awayTeam.textContent =
        game.away || "--";
    }


    if (homeScore) {
      homeScore.textContent =
        game.homeScore ?? "-";
    }


    if (awayScore) {
      awayScore.textContent =
        game.awayScore ?? "-";
    }


    if (gameStatus) {

      gameStatus.textContent =
        game.status === "finished"
          ? "FINAL"
          : String(game.status || "").toUpperCase();

    }


    document.title =
      `${game.home || ""} vs ${game.away || ""} | Asia HCBB Baseball Alliance`;


    /* -----------------------------------------------
       Detail
       ----------------------------------------------- */

    renderScoreboard(game);

    renderPitching(game);

    renderHomeRuns(game);

    renderNotes(game);

  }


  /* =======================================================
     LANGUAGE BUTTONS
     ======================================================= */

  document.addEventListener(
    "click",
    function (event) {

      const button =
        event.target.closest("[data-lang]");


      if (!button) {
        return;
      }


      const language =
        button.dataset.lang;


      if (!translations[language]) {
        return;
      }


      currentLanguage = language;


      localStorage.setItem(
        "asiaHCBBLanguage",
        currentLanguage
      );


      applyLanguage();

    }
  );


  /* =======================================================
     START
     ======================================================= */

  document.addEventListener(
    "DOMContentLoaded",
    function () {

      applyLanguage();

    }
  );


})();
