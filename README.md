# Pollix

Pollix is a minimal Stellar + Soroban polling app. It lets users connect a supported Stellar wallet, create polls, vote on-chain, and watch contract events sync back into the UI in near real time.

## What changed

- Project renamed to `Pollix`
- UI rebuilt for a cleaner light theme
- New default contract id wired into frontend
- Deploy script hardened to wait for funded testnet accounts before sending transactions

## Tech

- React + Vite
- Soroban smart contract in Rust
- `StellarWalletsKit` for multi-wallet support
- Stellar testnet RPC + Stellar Expert links

## Local setup

Run from project root:

```bash
npm install
npm run contract:build
npm run wasm:sync
npm run dev
```

Optional local env:

```bash
cp .env.example .env.local
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm test
npm run contract:build
npm run wasm:sync
npm run contract:deploy
```

## Environment

```env
VITE_STELLAR_RPC_URL=https://soroban-testnet.stellar.org
VITE_STELLAR_NETWORK_PASSPHRASE=Test SDF Network ; September 2015
VITE_STELLAR_CONTRACT_ID=CAHG7YZZGL75OEPTLVN53S3JCOIJGXRKJW4IO523RFDRLL2QSNOZMRP3
VITE_STELLAR_READ_ACCOUNT=
VITE_STELLAR_EXPLORER_URL=https://stellar.expert/explorer/testnet
VITE_POLL_CONTRACT_WASM_URL=/contracts/poll_contract.wasm
```

## Current testnet deployment

- Network: `Stellar Testnet`
- Contract id: `CAHG7YZZGL75OEPTLVN53S3JCOIJGXRKJW4IO523RFDRLL2QSNOZMRP3`
- Contract explorer: https://stellar.expert/explorer/testnet/contract/CAHG7YZZGL75OEPTLVN53S3JCOIJGXRKJW4IO523RFDRLL2QSNOZMRP3
- WASM upload tx: `ba448a3a6940eb61a57af2bd157885d648a0d2a0c9ab94c96c35de65f04199b0`
- Deploy tx: `c728a93d3cd08f59ac5180dfbb719a01bfaf87ddea22d5f6b377bf61041df4ec`
- Sample `create_poll` tx: `5b11d01e8a7be366c3d8cf893e4920b1e574c96727ad3e5d876c96ec13ab86ea`

## Testnet notes

- Wallet must be funded on testnet before signing contract writes
- Read-only mode still works without a connected wallet
- If you redeploy, update `VITE_STELLAR_CONTRACT_ID` or `.env.local`

## Project structure

- `src/` frontend
- `src/lib/stellar.js` wallet, RPC, contract, event helpers
- `src/lib/pollCache.js` local cache helpers
- `src/lib/pollLogic.js` poll view logic
- `poll_contract/` Soroban contract
- `scripts/` contract deploy + wasm sync helpers
- `tests/` Node test suite
