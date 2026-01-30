let elements = [];
let rules = [];

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const percent1 = document.getElementById("percent1");
const percent2 = document.getElementById("percent2");
const resultEl = document.getElementById("result");
const explainEl = document.getElementById("explanation");

// LOAD DATA
Promise.all([
  fetch("data/elements.json").then(res => res.json()),
  fetch("data/rules.json").then(res => res.json())
]).then(([elData, ruleData]) => {
  elements = elData;
  rules = ruleData;
  populateSelect(input1);
  populateSelect(input2);
});

// ISI DROPDOWN
function populateSelect(select) {
  select.innerHTML = "";
  elements.forEach(el => {
    const opt = document.createElement("option");
    opt.value = el.id;
    opt.textContent = `${el.icon} ${el.name}`;
    select.appendChild(opt);
  });
}

// SYNC PERSENTASE (TOTAL 100%)
function syncPercent(changed) {
  if (changed === 1) {
    percent2.value = 100 - percent1.value;
  } else {
    percent1.value = 100 - percent2.value;
  }
}

// KOMBINASI
function combine() {
  const a = input1.value;
  const b = input2.value;
  const ap = parseInt(percent1.value);
  const bp = parseInt(percent2.value);

  explainEl.innerText = "";

  const rule = rules.find(r =>
    r.a === a &&
    r.b === b &&
    (r.min_a === undefined || ap >= r.min_a) &&
    (r.min_b === undefined || bp >= r.min_b)
  );

  if (rule) {
    resultEl.innerText = "Output: " + rule.result;
    explainEl.innerText = rule.explain;
  } else {
    resultEl.innerText = "Output: Tidak ada reaksi";
    explainEl.innerText =
      "Kombinasi ini tidak menyebabkan perubahan materi atau energi.";
  }
}
