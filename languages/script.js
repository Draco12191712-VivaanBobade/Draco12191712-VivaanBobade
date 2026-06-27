const languages = [
  { name: "TypeScript", percent: 12, color: "#3178c6" },
  { name: "JavaScript", percent: 10, color: "#f1e05a" },
  { name: "C#", percent: 9, color: "#178600" },
  { name: "C++", percent: 8, color: "#f34b7d" },
  { name: "HTML", percent: 7, color: "#e34c26" },
  { name: "CSS", percent: 6, color: "#663399" },
  { name: "JSON", percent: 5, color: "#292929" },
  { name: "Lua", percent: 4, color: "#000080" },
  { name: "Python", percent: 4, color: "#3572A5" },
  { name: "Java", percent: 4, color: "#b07219" },
  { name: "C", percent: 3, color: "#555555" },
  { name: "Kotlin", percent: 2.5, color: "#A97BFF" },
  { name: "Rust", percent: 2.5, color: "#DEA584" },
  { name: "XML", percent: 2, color: "#0060ac" },
  { name: "YAML", percent: 2, color: "#cb171e" },
  { name: "Markdown", percent: 2, color: "#083fa1" },
  { name: "mcfunction", percent: 2, color: "#5B8731" },
  { name: "MoLang", percent: 2, color: "#4CAF50" },
  { name: "Go", percent: 1.5, color: "#00ADD8" },
  { name: "Objective-C", percent: 1, color: "#438EFF" },
  { name: "Objective-C++", percent: 1, color: "#6866fb" },
  { name: "Luau", percent: 1, color: "#00A2FF" },
  { name: "Assembly", percent: 1, color: "#6E4C13" },
  { name: "MATLAB", percent: 1, color: "#E16737" },
  { name: "Vue", percent: 1, color: "#41B883" },
  { name: "CoffeeScript", percent: 0.5, color: "#244776" },
  { name: "Common Lisp", percent: 0.5, color: "#3FB68B" },
  { name: "Haskell", percent: 0.5, color: "#5E5086" },
  { name: "Fortran", percent: 0.5, color: "#4D41B1" },
  { name: "BASIC", percent: 0.5, color: "#FFAA00" },
  { name: "Pascal", percent: 0.5, color: "#E3F171" },
  { name: "Ada", percent: 0.5, color: "#02F88C" },
  { name: "AppleScript", percent: 0.5, color: "#101F1F" },
  { name: "Forth", percent: 0.5, color: "#341708" },
  { name: "UnrealScript", percent: 0.5, color: "#A54C4D" },
  { name: "Papyrus", percent: 0.5, color: "#6600CC" },
  { name: "HTTP", percent: 0.5, color: "#005C9C" },
  { name: "CSV", percent: 0.5, color: "#237346" },
  { name: "Godot Resource", percent: 0.5, color: "#478CBF" },
  { name: "KiCad Schematic", percent: 0.5, color: "#314CB0" },
];

const bar = document.querySelector(".bar");
const grid = document.querySelector(".grid");

languages.sort((a, b) => b.percent - a.percent);

languages.forEach((lang) => {
  const segment = document.createElement("div");
  segment.className = "segment";
  segment.style.width = `${lang.percent}%`;
  segment.style.background = lang.color;
  segment.title = `${lang.name} (${lang.percent}%)`;

  bar.appendChild(segment);

  const item = document.createElement("div");
  item.className = "lang";

  item.innerHTML = `
        <span class="dot" style="background:${lang.color}"></span>
        ${lang.name}
        <span class="percent">${lang.percent}%</span>
    `;

  grid.appendChild(item);
});
