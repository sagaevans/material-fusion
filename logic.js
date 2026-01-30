const rules = [
  { a: "Air", ap: 50, b: "Energi Panas", bp: 50, result: "Uap" },
  { a: "Air", ap: 60, b: "Energi Panas", bp: 40, result: "Air Panas" },
  { a: "Hidrogen", ap: 66, b: "Oksigen", bp: 34, result: "Air (H2O)" },
  { a: "Gas Hidrogen", ap: 80, b: "Gravitasi", bp: 20, result: "Proto-bintang" },
  { a: "Proto-bintang", ap: 60, b: "Gravitasi", bp: 40, result: "Bintang" }
];

function combine() {
  const a = document.getElementById("input1").value;
  const b = document.getElementById("input2").value;
  const ap = parseInt(document.getElementById("percent1").value);
  const bp = parseInt(document.getElementById("percent2").value);

  let found = rules.find(r =>
    r.a === a && r.b === b &&
    Math.abs(r.ap - ap) <= 10 &&
    Math.abs(r.bp - bp) <= 10
  );

  document.getElementById("result").innerText =
    found ? "Output: " + found.result : "Output: Tidak ada reaksi";
}
