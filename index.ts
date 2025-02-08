import { wallet } from "./src/solana";
import { getPrice } from "./src/priceFetcher";



async function main() {
    console.log("✅ Wallet Loaded:", wallet.publicKey.toBase58());
    const price = await getPrice("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");
    console.log("✅ Price:", price);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});