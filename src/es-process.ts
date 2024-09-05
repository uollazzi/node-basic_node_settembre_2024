import fs from "node:fs";

export default () => {
    console.log("Comando:", process.argv[2]);

    if (process.argv[2] == "generate") {
        const cosa = process.argv[3];
        const nome = process.argv[4];

        switch (cosa) {
            case "component":
                fs.writeFileSync(`data/${nome}.component.html`, `${nome} works!`, "utf8");
                break;
            case "service":
                fs.writeFileSync(`data/${nome}.service.ts`, ``, "utf8");
                break;
        }
    } else if (process.argv[2] == "new") {
        console.log("Creo applicazione...");
    }
}