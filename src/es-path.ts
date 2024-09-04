import path from "node:path"; // roba che riguarda la gestione dei percorsi dei files e delle cartelle

export default () => {
    const dir = "/usr/upload";
    const adesso = new Date();
    const anno = adesso.getFullYear();
    const file = "file.txt";

    // /usr/upload/2024/file.txt
    // const filePath = dir + "/" + anno + "/" + file;
    const filePath = path.join(dir, anno.toString(), file);
    console.log(filePath);

    const filePath2 = "C:\\Progetti\\Tutorials\\LAB4T\\NODE\\settembre_2024\\node-basic_node_settembre_2024\\src";
    const dirName = path.basename(filePath2);
    console.log(dirName);
}