import { URL, URLSearchParams } from "node:url"; // roba che riguarda la gestione degli indirizzi web "url"

export default () => {
    const urlString = "https://www.example.com/cucina/2023/9?query=123&sort=ascending&nome=mario&anno=2024&apiKey=jkdkjd8jnsdf9898sdfkj";
    const parsedUrl = new URL(urlString);

    console.log("host:", parsedUrl.host);
    console.log("path:", parsedUrl.pathname);
    console.log("queryString:", parsedUrl.searchParams);
    console.log("sort:", parsedUrl.searchParams.get("sort"));
    console.log("anno:", parsedUrl.searchParams.get("anno"));

    const baseUrl = "https://www.amazon.com";
    const path = "/products";
    const queryString = { category: "electronics", page: "1", pageSize: "20" };

    const constructedUrl = new URL(path, baseUrl);
    constructedUrl.search = new URLSearchParams(queryString).toString();

    console.log(constructedUrl.href);
}