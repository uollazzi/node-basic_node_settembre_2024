import fs from "node:fs"; // file system - roba che riguarda la gestione di files e cartella
import path from "node:path";
import { DateTime } from "luxon";

export default () => {
    const workDir = process.cwd();
    const dataDir = "data";
    const dataFullDir = path.join(workDir, dataDir);

    // lettura file
    try {
        const testo = fs.readFileSync(path.join(dataFullDir, "file.txt"), "utf8");
        console.log(testo);
    } catch (error) {
        console.log("Errore nella lettura del file");
    }

    // scrittura
    const contenuto = `Sono le ore ${new Date().toLocaleTimeString()}`;

    try {
        fs.writeFileSync(path.join(dataFullDir, "data.txt"), contenuto, "utf8");
        console.log("Scrittura OK");
    } catch (error) {
        console.log("Errore nella scrittura del file");
    }

    // leggere contenuto di una cartella
    try {
        const entities = fs.readdirSync(workDir, { withFileTypes: true });

        // alternativa 1
        for (const entity of entities) {
            console.log(entity.isDirectory() ? "[D]" : "[F]", entity.name);
        }

        // alternativa 2
        // for (const entity of entities.map(e => `${e.isDirectory() ? "[D]" : "[F]"} ${e.name}`)) {
        //     console.log(entity);
        // }
    } catch (error) {
        console.log("Errore nella lettura della cartella");
    }

    // statistiche (metadati) entità
    try {
        const entity = fs.statSync(path.join(dataFullDir, "file.txt"));

        console.log("Dimensione:", entity.size);
        const dataModifica = DateTime.fromMillis(entity.mtimeMs);
        console.log(dataModifica.setLocale("it").toFormat("dd MMMM yyyy HH:mm"));

        const adesso = DateTime.now();
        console.log(adesso);

        const tempoPassatoDaUltimaModifica = adesso.diff(dataModifica, "hours");
        console.log("Tempo passato:", Math.floor(tempoPassatoDaUltimaModifica.hours), "ore.");
    } catch (error) {
        console.log("Errore nel recupero delle informazioni");
    }
}

export const savePosts = async () => {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let dati = await res.json();

        const dataFullDir = path.join(process.cwd(), "data");

        fs.writeFileSync(path.join(dataFullDir, "posts.json"), JSON.stringify(dati, null, 4), "utf8");

    } catch (error) {
        console.log("Si è verificato un errore");
    }
}