let pippo: string = "Pippo";
console.log(pippo);

let frutta = ["mela", "pera", "banana"];

// alternativa 1
// for (let i = 0; i < frutta.length; i++) {
//     const f = frutta[i];
//     console.log(f);
// }

// alternativa 2
for (const f of frutta) {
    console.log(f);
}