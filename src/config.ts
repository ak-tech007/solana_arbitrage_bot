import dotenv from 'dotenv'

dotenv.config();

export const RPC_URL = process.env.RPC_URL || "https://api.mainnet-beta.solana.com";
export const PRIVATE_KEY = process.env.PRIVATE_KEY || "";