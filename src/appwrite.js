import { Client, Account, Databases } from "appwrite";

const client = new Client();
client.setProject("adrionic").setEndpoint("https://api.adrionic.xyz/v1");

export const account = new Account(client);
export const databases = new Databases(client);
