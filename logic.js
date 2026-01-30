// RULES DENGAN THRESHOLD (LEBIH LOGIS)
const rules = [
  {
    a: "Air",
    b: "Energi Panas",
    condition: (ap, bp) => bp >= 50,
    result: "Uap (H₂O gas)"
  },
  {
    a: "Air",
    b: "Energi Dingin",
    condition: (ap, bp) => bp >= 40,
    result: "Es (H₂O padat)"
  },
  {
    a: "Hidrogen",
    b: "Oksigen",
    condition: (ap, bp) => ap >= 60 && bp >= 30,
    result: "Air (H₂O)"
  },
  {
    a: "Karbon",
    b: "Oksigen",
    condition: (ap, bp) => bp >= 40,
    result: "Karbon Dioksida (CO₂)"
  },
  {
    a: "Gas Hidrogen",
    b: "Gravitasi",
    condition: (ap, bp) => bp >= 20,
    result: "Proto-bintang"
  },
  {
    a: "Proto-bintang",
    b: "Gravitasi",
    condition: (ap, bp) => bp >= 40,
    result: "Bintang"
  },
  {
    a: "Bintang",
    b: "Waktu",
    condition: (ap, bp) => bp >= 30,
    result: "Supernova"
  }
];

// AUTO SYNC AGAR TOTAL SELALU 100%
function syncPercent(changed) {
  const p1 = document.getElementById("percent1");
  const p2 = document.getElementById("percent2");

  if (changed === 1) {
    let v = parseInt(p1.value) || 0;
    if (v > 100) v = 100;
    p1.value = v;
    p2.value = 100 - v;
  } else {
    let v = parseInt(p2.value) || 0;
    if (v > 100) v = 100;
    p2.value = v;
    p1.value = 100 - v;
  }
}

// KOMBINASI
function combine() {
  const a = document.getElementById("input1").value;
  const b = document.getElementById("input2").value;
  const ap = parseInt(document.getElementById("percent1").value);
  const bp = parseInt(document.getElementById("percent2").value);

  const rule = rules.find(r =>
    r.a === a &&
    r.b === b &&
    r.condition(ap, bp)
  );

  document.getElementById("result").innerText =
    rule ? "Output: " + rule.result : "Output: Tidak ada reaksi";
}
