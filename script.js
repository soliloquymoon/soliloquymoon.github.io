// Requires data.js (gameProjects, modelingProjects, workInProgressProjects)
// tag[0] is the year; the remaining tags are shown as tag chips.

const ARROW = `<svg class="arrow" viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 23 23 5M9 5h14v14"/></svg>`;
const LINK_LABELS = { itch: "itch.io", youtube: "Demo Video", github: "GitHub", notion: "Notion" };
const IMG_EXT = ["png", "jpg", "jpeg"];
const $ = (id) => document.getElementById(id);

const FOLDERS = [
  [gameProjects, "gameProject"],
  [modelingProjects, "modeling"],
  [workInProgressProjects, "wip"],
];

function mediaPath(p) {
  const folder = FOLDERS.find(([list]) => list.includes(p))[1];
  return `./media/${folder}/${p.title.replace(/[!.,?]/g, "")}`;
}

const tagsHTML = (arr) => (arr || []).map((t) => `<span class="tag">${t}</span>`).join("");
const videoHTML = (p) =>
  `<video src="${mediaPath(p)}/video.mp4" autoplay muted loop playsinline></video>`;

// ---------- Cards ----------
function cardHTML(kind, p, i) {
  const year = (p.tag && p.tag[0]) || "";
  const rest = (p.tag || []).slice(1);

  if (kind === "model") {
    return `<div class="media">${videoHTML(p)}<span class="year">${year}</span></div><h4>${p.title}</h4>`;
  }
  if (kind === "wip") {
    return `<span class="cat">${p.category || "Work in progress"}</span>
      <h4>${p.title}</h4><p>${p.short || ""}</p>
      <div class="tags">${tagsHTML(rest.filter((t) => t !== "WIP"))}</div>`;
  }
  // game
  const num = String(i + 1).padStart(2, "0");
  return `
    <div class="media">${videoHTML(p)}<span class="year">${year}</span></div>
    <div class="body">
      <div class="top">
        <div>
          <span class="cat">${num} / ${p.category || "Game"}</span>
          <h4 class="title">${p.title}</h4>
        </div>${ARROW}
      </div>
      <p class="desc">${p.short || ""}</p>
      <div class="tag-row">
        <div class="tags">${tagsHTML(rest)}</div>
        ${p.laurel ? `<img class="laurel" src="${p.laurel}" alt="Award" onerror="this.remove()">` : ""}
      </div>
      ${p.role || p.highlight ? `<div class="foot"><div>
        ${p.role ? `<p class="meta">${p.role}</p>` : ""}
        ${p.highlight ? `<p class="hl">${p.highlight}</p>` : ""}
      </div></div>` : ""}
    </div>`;
}

function addProjects(listId, projects, kind) {
  const list = $(listId);
  const cls = { game: "card", model: "mini", wip: "wip" }[kind];
  projects.forEach((p, i) => {
    const card = document.createElement("button");
    card.className = cls;
    card.type = "button";
    card.innerHTML = cardHTML(kind, p, i);
    card.addEventListener("click", () => {
      currentList = projects;
      currentIndex = i;
      openModal(p);
    });
    list.appendChild(card);
  });
}

let currentList = [];
let currentIndex = 0;

addProjects("projectList", gameProjects, "game");
addProjects("modelList", modelingProjects, "model");
addProjects("wipList", workInProgressProjects, "wip");

// ---------- Modal ----------
const modal = $("projectModal");

function loadImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = url;
  });
}

async function openModal(p) {
  $("modalTitle").textContent = p.title;
  $("modalDesc").innerHTML = p.long ?? "";
  $("modalTags").innerHTML = tagsHTML(p.tag);
  $("modalLinks").innerHTML = Object.entries(p.links || {})
    .filter(([, url]) => url)
    .map(([k, url]) => `<a class="link" href="${url}" target="_blank" rel="noopener">${LINK_LABELS[k] || "Link"}</a>`)
    .join("");

  const carousel = document.createElement("div");
  carousel.className = "carousel";
  carousel.innerHTML = videoHTML(p);
  const dots = document.createElement("div");
  dots.className = "dots";
  const mark = () => {
    const w = (carousel.firstElementChild?.offsetWidth || 1) + 18;
    const on = Math.round(carousel.scrollLeft / w);
    [...dots.children].forEach((d, i) => d.classList.toggle("on", i === on));
  };
  const sync = () => {
    dots.innerHTML = carousel.children.length > 1
      ? [...carousel.children].map((_, i) => `<button type="button" aria-label="Slide ${i + 1}"></button>`).join("") : "";
    mark();
  };
  carousel.addEventListener("scroll", mark, { passive: true });
  dots.addEventListener("click", (e) => {
    const i = [...dots.children].indexOf(e.target);
    if (i >= 0) carousel.scrollTo({ left: i * (carousel.firstElementChild.offsetWidth + 18), behavior: "smooth" });
  });
  $("modalImages").replaceChildren(carousel, dots);
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";

  const token = p.title;
  for (let i = 1; i <= (p.imgCount || 0); i++) {
    for (const ext of IMG_EXT) {
      const img = await loadImage(`${mediaPath(p)}/${i}.${ext}`);
      if (img) {
        if ($("modalTitle").textContent === token) { carousel.appendChild(img); sync(); }
        break;
      }
    }
  }
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "";
  $("modalImages").innerHTML = ""; // stops the video
}

function step(dir) {
  if (!currentList.length) return;
  currentIndex = (currentIndex + dir + currentList.length) % currentList.length;
  openModal(currentList[currentIndex]);
}

$("prevBtn").onclick = () => step(-1);
$("nextBtn").onclick = () => step(1);
$("modalClose").onclick = closeModal;
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => {
  if (modal.style.display !== "flex") return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
});