let rules = [];
let elements = [];

// normalisasi teks
function normalize(text) {
  return text.trim().toLowerCase();
}

// LOAD DATA
Promise.all([
  fetch("data/rules.json").then(r => r.json()),
  fetch("data/elements.json").then(e => e.json())
]).then(([rulesData, elementsData]) => {
  rules = rulesData;
  elements = elementsData;
  populateSelect("input1");
  populateSelect("input2");
});

// ISI DROPDOWN DARI elements.json
function populateSelect(id) {
  const select = document.getElementById(id);
  select.innerHTML = "";

  elements.forEach(el => {
    const opt = document.createElement("option");
    opt.value = el.id;
    opt.textContent = el.id;
    select.appendChild(opt);
  });
}

// PROSES KOMBINASI
function combine() {
  const a = normalize(document.getElementById("input1").value);
  const b = normalize(document.getElementById("input2").value);

  const resultEl = document.getElementById("result");
  const explainEl = document.getElementById("explanation");

  explainEl.innerText = "";

  const rule = rules.find(r =>
    (r.inputs[0] === a && r.inputs[1] === b) ||
    (r.inputs[0] === b && r.inputs[1] === a)
  );

  if (rule) {
    resultEl.innerText = "Hasil: " + rule.result;
    explainEl.innerText = rule.explain;
  } else {
    resultEl.innerText = "Hasil: Tidak ada reaksi";
    explainEl.innerText =
      "Kombinasi ini tidak menyebabkan perubahan materi atau energi.";
  }
}
