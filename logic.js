const rules = [
  // AIR & ENERGI
  { a: "Air", ap: 50, b: "Energi Panas", bp: 50, result: "Uap (H2O gas)" },
  { a: "Air", ap: 60, b: "Energi Panas", bp: 40, result: "Air Panas" },
  { a: "Air", ap: 60, b: "Energi Dingin", bp: 40, result: "Es" },

  // ELEMEN
  { a: "Hidrogen", ap: 66, b: "Oksigen", bp: 34, result: "Air (H2O)" },
  { a: "Karbon", ap: 50, b: "Oksigen", bp: 50, result: "Karbon Dioksida (CO2)" },

  // MOLEKUL & ENERGI
  { a: "Air", ap: 50, b: "Energi Dingin", bp: 50, result: "Es" },

  // KOSMIK
  { a: "Gas Hidrogen", ap: 80, b: "Gravitasi", bp: 20, result: "Proto-bintang" },
  { a: "Proto-bintang", ap: 60, b: "Gravitasi", bp: 40, result: "Bintang" },
  { a: "Bintang", ap: 70, b: "Waktu", bp: 30, result: "Supernova" }
];

function combine() {
  const a = document.getElementById("input1").value;
  const b = document.getElementById("input2").value;
  const ap = parseInt(document.getElementById("percent1").value);
  const bp = parseInt(document.getElementById("percent2").value);

  if (ap + bp !== 100) {
    document.getElementById("result").innerText =
      "Output: Total persentase harus 100%";
    return;
  }

  let found = rules.find(r =>
    r.a === a &&
    r.b === b &&
    Math.abs(r.ap - ap) <= 10 &&
    Math.abs(r.bp - bp) <= 10
  );

  document.getElementById("result").innerText =
    found ? "Output: " + found.result : "Output: Tidak ada reaksi";
}
