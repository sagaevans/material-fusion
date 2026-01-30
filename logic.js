let rules = [];

function normalize(text) {
  return text.trim().toLowerCase();
}

// load rules dari JSON
fetch("rules.json")
  .then(res => res.json())
  .then(data => rules = data);

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
