# Pollix

Pollix is a mini end-to-end Stellar + Soroban dApp: a multi-wallet polling app backed by a deployed Soroban smart contract on Stellar Testnet, with real-time contract event sync, transaction progress feedback, basic caching, and a small automated test suite.

## Level 3 Submission Checklist (fill before submitting)

- Live demo link: https://pollix-one.vercel.app/
- Demo video (1 minute) link: https://drive.google.com/file/d/1cdpKdsmvOHXuiCg9wwU_9EdvNHkMECre/view?usp=sharing
- Test output screenshot (3+ passing tests): ✅ (see below)
- 3+ meaningful commits for Level 3: ✅


## Submission Overview


This project demonstrates:

- Multi-wallet integration with `StellarWalletsKit`
- Smart contract deployment on Stellar Testnet
- Contract reads and writes from the frontend
- Real-time event polling and state synchronization
- Visible transaction lifecycle feedback
- Wallet error handling for missing wallet, rejected request, and insufficient balance
- Loading states and progress indicators during reads/writes
- Basic caching of recently loaded poll data in `localStorage`
- Automated tests for core helper logic

## Key Features

- Connect with supported Stellar wallets including Freighter, xBull, Albedo, Rabet, Lobstr, Hana, Hot Wallet, and Klever
- Create, vote on, close, and delete polls through frontend contract calls
- Browse contract data in read-only mode even without a connected wallet
- See transaction phases in the UI: `preparing`, `awaiting-signature`, `pending`, `success`, and `error`
- Refresh poll state automatically from recent on-chain contract events

## Screenshots

<table width="100%">
  <tr>
    <td align="center" width="50%">
      <strong>🏠 Wallet Kit</strong><br/><br/>
       <img width="1876" height="1005" alt="screenshot_visible_2026-06-28_20-36-35" src="https://github.com/user-attachments/assets/870941e7-e61a-49a2-9381-227525c339b7" />
    </td>
    <td align="center" width="50%">
      <strong>📝 Home Page</strong><br/><br/>
  <img width="1876" height="1005" alt="screenshot_visible_2026-06-28_20-38-33" src="https://github.com/user-attachments/assets/d3c9a40f-2157-45d1-931f-07e49300bf35" />
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <strong>🗳️ Voting</strong><br/><br/>
 <img width="1876" height="1005" alt="screenshot_visible_2026-06-28_20-38-47" src="https://github.com/user-attachments/assets/19d878c7-9e33-488b-a957-81691d4ad9d4" />
    </td>
    <td align="center" width="50%">
      <strong>✅ CI/CD Results</strong><br/><br/>
      <img width="1876" height="1005" alt="screenshot_visible_2026-06-28_20-39-03" src="https://github.com/user-attachments/assets/5121bef7-fd13-43c4-b500-45c6f19a490f" />

  </tr>
</table>

## Mobile responsive screenshots

Below is a mobile view screenshot demonstrating the responsive layout on narrow screens. Replace the placeholder with a real phone-sized screenshot captured from the dev tools or a device.

<div align="center">
<img width="425" height="912" alt="image" src="https://github.com/user-attachments/assets/ab72f56f-d897-48bc-aebe-68092d1b00f2" />


</div>


## Deployed Contract

- Network: `Stellar Testnet`
- Contract address: `CAHG7YZZGL75OEPTLVN53S3JCOIJGXRKJW4IO523RFDRLL2QSNOZMRP3`
- Contract explorer: https://stellar.expert/explorer/testnet/contract/CAHG7YZZGL75OEPTLVN53S3JCOIJGXRKJW4IO523RFDRLL2QSNOZMRP3

## Verifiable Contract Call

- Deploy tx hash: `c728a93d3cd08f59ac5180dfbb719a01bfaf87ddea22d5f6b377bf61041df4ec`
- Stellar Expert link: https://stellar.expert/explorer/testnet/tx/c728a93d3cd08f59ac5180dfbb719a01bfaf87ddea22d5f6b377bf61041df4ec
- Sample `create_poll` tx hash: `5b11d01e8a7be366c3d8cf893e4920b1e574c96727ad3e5d876c96ec13ab86ea`
- Stellar Expert link: https://stellar.expert/explorer/testnet/tx/5b11d01e8a7be366c3d8cf893e4920b1e574c96727ad3e5d876c96ec13ab86ea

## Live Demo

https://pollix-one.vercel.app/

## Setup

Run all commands from the `pollix` project directory.

1. Install dependencies:

```bash
npm install
```

2. Build the Soroban contract:

```bash
npm run contract:build
```

3. Sync the compiled contract WASM into the frontend (used to load the contract spec/ABI at runtime):

```bash
npm run wasm:sync
```

4. Optionally create a local env file:

```powershell
Copy-Item .env.example .env.local
```

5. Start the frontend:

```bash
npm run dev
```

6. Build for production:

```bash
npm run build
```

## Tests

Run the automated tests:

```bash
npm test
```

For submission, include a screenshot of the terminal output showing **3+ tests passing**.

## Environment Variables

```env
VITE_STELLAR_RPC_URL=https://soroban-testnet.stellar.org
VITE_STELLAR_NETWORK_PASSPHRASE=Test SDF Network ; September 2015
VITE_STELLAR_CONTRACT_ID=CAHG7YZZGL75OEPTLVN53S3JCOIJGXRKJW4IO523RFDRLL2QSNOZMRP3
VITE_STELLAR_READ_ACCOUNT=
VITE_STELLAR_EXPLORER_URL=https://stellar.expert/explorer/testnet
VITE_POLL_CONTRACT_WASM_URL=/contracts/poll_contract.wasm
```

## Testnet Notes

- A connected wallet must be funded on Stellar Testnet before it can send contract transactions
- If a wallet has not been created on Testnet yet, fund it with Friendbot first and then retry
- The app can still read poll data without a funded wallet by using a temporary read account

## Scripts

- `npm run dev` starts the frontend
- `npm run build` creates a production build
- `npm run lint` runs ESLint
- `npm test` runs the Node.js test suite
- `npm run contract:build` builds the Soroban contract
- `npm run wasm:sync` copies the compiled WASM into `public/contracts/` for the frontend to load the contract spec
- `npm run contract:deploy` uploads and deploys the contract to testnet

## Deploy (Vercel / Netlify)

This is a standard Vite build.

- Node.js: use Node `^20.19.0` or `>=22.12.0` (required by Vite 8)
- Build command: `npm run build`
- Output directory: `dist`
- Set the env vars from the section above (at minimum `VITE_STELLAR_CONTRACT_ID` if you deploy a new contract)

## Demo Video (1 minute)

https://drive.google.com/file/d/1cdpKdsmvOHXuiCg9wwU_9EdvNHkMECre/view?usp=sharing

Walkthrough:

1. Open the deployed site and show the “Read from contract” panel updating.
2. Connect a wallet (Freighter or any supported wallet).
3. Create a poll (show “awaiting-signature” → “pending” → “success”).
4. Vote on the poll and show the event feed / vote count updating.
5. Open the contract/tx on Stellar Expert via the links in the UI.

## Project Structure

- `src/` contains the React frontend
- `src/lib/stellar.js` contains wallet, RPC, contract, and event helpers
- `src/lib/pollCache.js` contains the basic poll cache helpers
- `src/lib/pollLogic.js` contains pure helper functions used by the UI
- `poll_contract/` contains the Soroban contract
- `scripts/` contains deployment helpers
- `tests/` contains the automated test suite

## Additional Docs

- Frontend guide: [FRONTEND.md](./FRONTEND.md)
- Contract guide: [poll_contract/README.md](./poll_contract/README.md)

## Submission Notes

- GitHub repository: `https://github.com/rajiv-sys-bot/pollix.git`
- The project includes multiple meaningful commits in git history
- The contract is deployed on testnet and called from the frontend
- Real-time event integration and visible transaction status are implemented
- Before final submission, update the checklist at the top with your live demo link, demo video link, and test screenshot
