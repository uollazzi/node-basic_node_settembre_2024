import { somma, PI } from "./matematica";
import * as mate from "./matematica";
import op from "./matematica";
import opp, { moltiplicazione } from "./matematica";



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

console.log(somma(4, 7));
console.log(mate.PI);

let o = new op();

console.log("=".repeat(20));
import * as myOs from "./es-os";
myOs.logHostName();
myOs.logUserName();

console.log("=".repeat(20));
import myPath from "./es-path";
myPath();

console.log("=".repeat(20));
import myUrl from "./es-url";
myUrl();


// import * as richieste from "./richieste";
// richieste.getPostsSync();

console.log("=".repeat(20));
import myFs, { savePosts } from "./es-fs";
myFs();
// savePosts();

console.log("=".repeat(20));
import myProcess from "./es-process";
myProcess();