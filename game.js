const D = ALLIANCE_DATA;

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const translations = {
  ja: {
    nav: { home: "ホーム", matches: "試合情報", standings: "順位表", schedule: "日程", leagues: "リーグ紹介" },
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
      hold: "ホールド",
      noData: "記録なし",
      noScoreboard: "スコアボードの記録はありません。",
      noHomeRuns: "ホームランはありません。",
      noHolds: "ホールド記録はありません。",
      noPitching: "投手記録はありません。",
      notFound: "試合が見つかりません",
      notFoundDescription: "指定された試合は存在しません。",
      return: "試合情報へ戻る",
      scheduled: "試合予定",
      final: "FINAL",
      inning: "回",
      solo: "ソロ",
      run2: "2ラン",
      run3: "3ラン",
      grand: "満塁",
      footer: "All Rights Reserved."
    },
    footer: { rights: "All Rights Reserved." }
  },
  ko: {
    nav: { home: "홈", matches: "경기 정보", standings: "순위표", schedule: "일정", leagues: "리그 소개" },
    game: {
      back: "← 경기 정보로 돌아가기", eyebrow: "GAME DETAILS", scoreboardEyebrow: "SCOREBOARD", scoreboard: "스코어보드",
      pitchingEyebrow: "PITCHING", pitching: "투수 기록", homeRunsEyebrow: "HOME RUNS", homeRuns: "홈런",
      notesEyebrow: "GAME NOTES", notes: "경기 메모", win: "승리 투수", loss: "패전 투수", save: "세이브", hold: "홀드",
      noData: "기록 없음", noScoreboard: "스코어보드 기록이 없습니다.", noHomeRuns: "홈런이 없습니다.", noHolds: "홀드 기록이 없습니다.",
      noPitching: "투수 기록이 없습니다.", notFound: "경기를 찾을 수 없습니다.", notFoundDescription: "지정된 경기가 존재하지 않습니다.", return: "경기 정보로 돌아가기",
      scheduled: "경기 예정", final: "FINAL", inning: "이닝", solo: "솔로", run2: "2점 홈런", run3: "3점 홈런", grand: "만루", footer: "All Rights Reserved."
    },
    footer: { rights: "All Rights Reserved." }
  },
  en: {
    nav: { home: "Home", matches: "Games", standings: "Standings", schedule: "Schedule", leagues: "Leagues" },
    game: {
      back: "← Back to Games", eyebrow: "GAME DETAILS", scoreboardEyebrow: "SCOREBOARD", scoreboard: "Scoreboard",
      pitchingEyebrow: "PITCHING", pitching: "Pitching Results", homeRunsEyebrow: "HOME RUNS", homeRuns: "Home Runs",
      notesEyebrow: "GAME NOTES", notes: "Game Notes", win: "Win", loss: "Loss", save: "Save", hold: "Hold",
      noData: "No record", noScoreboard: "No scoreboard data.", noHomeRuns: "No home runs.", noHolds: "No hold records.",
      noPitching: "No pitching records.", notFound: "Game not found", notFoundDescription: "The requested game does not exist.", return: "Back to Games",
      scheduled: "Scheduled", final: "FINAL", inning: "Inn.", solo: "Solo", run2: "2-run", run3: "3-run", grand: "Grand Slam", footer: "All Rights Reserved."
    },
    footer: { rights: "All Rights Reserved." }
  },
  zh: {
    nav: { home: "首页", matches: "比赛信息", standings: "排名", schedule: "赛程", leagues: "联赛介绍" },
    game: {
      back: "← 返回比赛信息", eyebrow: "GAME DETAILS", scoreboardEyebrow: "SCOREBOARD", scoreboard: "记分板",
      pitchingEyebrow: "PITCHING", pitching: "投手记录", homeRunsEyebrow: "HOME RUNS", homeRuns: "本垒打",
      notesEyebrow: "GAME NOTES", notes: "比赛备注", win: "胜投", loss: "败投", save: "救援", hold: "中继成功",
      noData: "无记录", noScoreboard: "暂无记分板记录。", noHomeRuns: "没有本垒打。", noHolds: "没有中继成功记录。",
      noPitching: "暂无投手记录。", notFound: "找不到比赛", notFoundDescription: "指定的比赛不存在。", return: "返回比赛信息",
      scheduled: "比赛 예정", final: "FINAL", inning: "局", solo: "阳春", run2: "两分", run3: "三分", grand: "满贯", footer: "All Rights Reserved."
    },
    footer: { rights: "All Rights Reserved." }
  }
};

let currentLanguage = localStorage.getItem("asiaHCBBLanguage") || "ja";

function t(path) {
  let value = translations[currentLanguage];
  for (const part of path.split(".")) value = value?.[part];
  return value || path;
}

function getLocalized(value, fallback = "") {
  if (value == null) return fallback;
  if (typeof value !== "object") return String(value);
  return value[currentLanguage] || value.en || value.ja || fallback;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function localeName() {
  return currentLanguage === "ja" ? "ja-JP" : currentLanguage === "ko" ? "ko-KR" : currentLanguage === "zh" ? "zh-CN" : "en-US";
}

function fmtDate(iso) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat(localeName(), { timeZone: "Asia/Tokyo", year: "numeric", month: "numeric", day: "numeric", weekday: "short" }).format(date);
}

function fmtTime(iso) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat(localeName(), { timeZone: "Asia/Tokyo", hour: "2-digit", minute: "2-digit", hour12: false }).format(date);
}

function getGame() {
  const id = new URLSearchParams(location.search).get("id");
  if (!id) return null;
  return (D.games || []).find(game => String(game.id) === String(id)) || null;
}

function getDetail(game) {
  return game?.detail || game?.details || {};
}

function getPitching(game) {
  const detail = getDetail(game);
  return detail.pitching || game?.pitching || {};
}

function getHomeRuns(game) {
  const detail = getDetail(game);
  return Array.isArray(detail.homeRuns) ? detail.homeRuns : Array.isArray(game?.homeRuns) ? game.homeRuns : [];
}

function teamName(game, side) {
  return side === "home" ? game.home : game.away;
}

function applyLanguage(lang = currentLanguage) {
  if (!translations[lang]) lang = "ja";
  currentLanguage = lang;
  localStorage.setItem("asiaHCBBLanguage", lang);
  document.documentElement.lang = lang;

  $$('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
  $$('[data-i18n-html]').forEach(el => el.innerHTML = t(el.dataset.i18nHtml));
  $$('[data-lang]').forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));

  renderGame();
}

function buildScoreboard(game) {
  const detail = getDetail(game);
  const innings = detail.innings || game.innings || null;
  const tbody = $("#scoreboard tbody");
  const thead = $("#scoreboard thead");

  if (!innings || !Array.isArray(innings.home) || !Array.isArray(innings.away)) {
    thead.innerHTML = "";
    tbody.innerHTML = `<tr><td class="empty-result">${t("game.noScoreboard")}</td></tr>`;
    return;
  }

  const count = Math.max(innings.home.length, innings.away.length);
  const headers = Array.from({ length: count }, (_, i) => i + 1);

  thead.innerHTML = `
    <tr>
      <th></th>
      ${headers.map(i => `<th>${i}</th>`).join("")}
      <th class="total">R</th>
    </tr>
  `;

  const homeRuns = innings.home.reduce((sum, value) => sum + (Number(value) || 0), 0);
  const awayRuns = innings.away.reduce((sum, value) => sum + (Number(value) || 0), 0);

  tbody.innerHTML = `
    <tr>
      <td>${escapeHtml(game.home)}</td>
      ${headers.map((_, i) => `<td>${innings.home[i] ?? 0}</td>`).join("")}
      <td class="total">${game.homeScore ?? homeRuns}</td>
    </tr>
    <tr>
      <td>${escapeHtml(game.away)}</td>
      ${headers.map((_, i) => `<td>${innings.away[i] ?? 0}</td>`).join("")}
      <td class="total">${game.awayScore ?? awayRuns}</td>
    </tr>
  `;
}

function buildPitching(game) {
  const p = getPitching(game);
  const rows = [];

  if (p.win) rows.push(`<div class="result-row"><div class="result-label">${t("game.win")}</div><div class="result-value">${escapeHtml(p.win)}</div></div>`);
  if (p.loss) rows.push(`<div class="result-row"><div class="result-label">${t("game.loss")}</div><div class="result-value">${escapeHtml(p.loss)}</div></div>`);
  if (p.save) rows.push(`<div class="result-row"><div class="result-label">${t("game.save")}</div><div class="result-value">${escapeHtml(p.save)}</div></div>`);

  const holds = Array.isArray(p.holds) ? p.holds : [];
  if (holds.length) {
    rows.push(`<div class="result-row"><div class="result-label">${t("game.hold")}</div><div class="result-value">${holds.map(h => escapeHtml(typeof h === "object" ? h.player || h.name : h)).join("<br>")}</div></div>`);
  }

  $("#pitchingResults").innerHTML = rows.length ? rows.join("") : `<div class="empty-result">${t("game.noPitching")}</div>`;
}

function homeRunText(hr) {
  if (hr.runs === 4) return t("game.grand");
  if (hr.runs === 3) return t("game.run3");
  if (hr.runs === 2) return t("game.run2");
  return t("game.solo");
}

function buildHomeRuns(game) {
  const hrs = getHomeRuns(game);
  const container = $("#homeRuns");

  if (!hrs.length) {
    container.innerHTML = `<div class="empty-result">${t("game.noHomeRuns")}</div>`;
    return;
  }

  const grouped = {};
  hrs.forEach(hr => {
    const side = hr.team === "away" || hr.team === game.away ? "away" : "home";
    if (!grouped[side]) grouped[side] = [];
    grouped[side].push(hr);
  });

  container.innerHTML = ["home", "away"].filter(side => grouped[side]?.length).map(side => `
    <div class="hr-team">${escapeHtml(teamName(game, side))}</div>
    ${grouped[side].map(hr => `
      <div class="result-row">
        <div class="result-label">${hr.inning ? `${escapeHtml(hr.inning)} ${t("game.inning")}` : ""}</div>
        <div class="result-value">
          ${escapeHtml(typeof hr.player === "object" ? getLocalized(hr.player) : hr.player || hr.name || t("game.noData"))}
          <span class="result-subtitle">${homeRunText(hr)}</span>
        </div>
      </div>
    `).join("")}
  `).join("");
}

function renderGame() {
  const game = getGame();
  const hero = $("#gameHero");
  const notFound = $("#gameNotFound");

  if (!game) {
    hero.hidden = true;
    $("#scoreboardSection").hidden = true;
    document.querySelectorAll("main > .section:not(#gameNotFound)").forEach(el => el.hidden = true);
    notFound.hidden = false;
    document.title = `${t("game.notFound")} | Asia HCBB Baseball Alliance`;
    return;
  }

  hero.hidden = false;
  notFound.hidden = true;
  $("#scoreboardSection").hidden = false;
  document.querySelectorAll("main > .section:not(#gameNotFound)").forEach(el => el.hidden = false);

  document.title = `${game.home} vs ${game.away} | Asia HCBB Baseball Alliance`;
  $("#gameType").textContent = getLocalized(game.title, game.type || "MATCH");
  $("#gameDate").textContent = `${fmtDate(game.time)} ${fmtTime(game.time)}`;
  $("#homeTeam").textContent = game.home || "—";
  $("#awayTeam").textContent = game.away || "—";
  $("#homeScore").textContent = game.homeScore ?? "—";
  $("#awayScore").textContent = game.awayScore ?? "—";
  $("#gameStatus").textContent = game.status === "finished" ? t("game.final") : t("game.scheduled");

  buildScoreboard(game);
  buildPitching(game);
  buildHomeRuns(game);

  const notes = getLocalized(getDetail(game).notes || game.notes, "");
  if (notes) {
    $("#notesSection").hidden = false;
    $("#gameNotes").textContent = notes;
  } else {
    $("#notesSection").hidden = true;
  }
}

$$('[data-lang]').forEach(button => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => applyLanguage(currentLanguage));
} else {
  applyLanguage(currentLanguage);
}
