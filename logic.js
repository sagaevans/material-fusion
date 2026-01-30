const rules = [
  // PERUBAHAN FASE AIR
  {
    a: "Air",
    b: "Energi Panas",
    condition: (ap, bp) => bp >= 50,
    result: "Uap (H₂O gas)",
    explain: "Panas yang cukup membuat air berubah dari cair menjadi gas."
  },
  {
    a: "Air",
    b: "Energi Dingin",
    condition: (ap, bp) => bp >= 40,
    result: "Es (H₂O padat)",
    explain: "Pendinginan membuat air berubah dari cair menjadi padat."
  },

  // KIMIA DASAR
  {
    a: "Hidrogen",
    b: "Oksigen",
    condition: (ap, bp) => ap >= 60 && bp >= 30,
    result: "Air (H₂O)",
    explain: "Hidrogen dan oksigen dapat bergabung membentuk molekul air."
  },
  {
    a: "Karbon",
    b: "Oksigen",
    condition: (ap, bp) => bp >= 40,
    result: "Karbon Dioksida (CO₂)",
    explain: "Karbon bereaksi dengan oksigen membentuk gas karbon dioksida."
  },

  // TIDAK ADA REAKSI (EDUKATIF)
  {
    a: "Air",
    b: "Oksigen",
    condition: () => true,
    result: "Tidak ada reaksi",
    explain: "Air sudah mengandung oksigen, jadi ditambah oksigen lagi tidak berubah."
  },

  // KOSMIK
  {
    a: "Gas Hidrogen",
    b: "Gravitasi",
    condition: (ap, bp) => bp >= 20,
    result: "Proto-bintang",
    explain: "Gravitasi menarik gas hidrogen hingga mulai membentuk bintang."
  },
  {
    a: "Proto-bintang",
    b: "Gravitasi",
    condition: (ap, bp) => bp >= 40,
    result: "Bintang",
    explain: "Tekanan gravitasi yang besar memicu reaksi fusi di inti bintang."
  },
  {
    a: "Bintang",
    b: "Waktu",
    condition: (ap, bp) => bp >= 30,
    result: "Supernova",
    explain: "Bintang besar akan meledak setelah kehabisan bahan bakar."
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

  const resultEl = document.getElementById("result");
  const explainEl = document.getElementById("explanation");

  if (rule) {
    resultEl.innerText = "Output: " + rule.result;
    explainEl.innerText = rule.explain;
  } else {
    resultEl.innerText = "Output: Tidak ada reaksi";
    explainEl.innerText =
      "Kombinasi ini tidak menyebabkan perubahan materi atau energi.";
  }
}
