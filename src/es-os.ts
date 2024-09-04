import os from "node:os"; // roba che riguarda il sistema operativo

export const logHostName = () => {
    console.log(os.hostname());
}

export const logUserName = () => {
    const u = os.userInfo();
    console.log(u.username);
}