export const getPosts = () => {
    // 1. fai la richiesta
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res: Response) => {
            // 2. segnal lo status
            console.log(res.status);
            return res.json();
        })
        .then((posts: any[]) => {
            // 3. recupera il json
            console.log("POSTS:", posts.length);
        })
        .catch(err => console.log("ERRORE:", err));

    // 0. operazione teriminata
    console.log("Post recuperati dal server.");
}

export const getPostsSync = async () => {
    try {
        // 1. fai la richiesta
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");

        // 2. segnal lo status
        console.log(res.status);

        // 3. recupera il json
        let posts = await res.json();
        console.log("POSTS:", posts.length);

        // 4. operazione teriminata
        console.log("OPERAZIONE TERMINATA");
    } catch (err) {
        console.log("ERRORE:", err)
    }
}

