import { Connection, Keypair } from "@solana/web3.js";
import {RPC_URL, PRIVATE_KEY} from "./config";

export const connection = new Connection(RPC_URL, 'confirmed');
export const wallet = Keypair.fromSecretKey(new Uint8Array(JSON.parse(PRIVATE_KEY)));


