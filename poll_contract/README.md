# Pollix Contract

Soroban contract backing Pollix poll creation, voting, closing, deletion, and read helpers on Stellar testnet.

## Main files

- `src/lib.rs` contract logic
- `Cargo.toml` Rust package + Soroban deps

## Build

```bash
npm run contract:build
```

Or:

```bash
cargo build --manifest-path poll_contract/Cargo.toml --target wasm32v1-none --release
```

## Deploy

```bash
npm run contract:deploy
```

Deploy script behavior:

- creates temp funded testnet deployer when `STELLAR_DEPLOYER_SECRET` not set
- uploads compiled WASM
- deploys contract
- sends sample `create_poll`
- prints deployment JSON

## Current deployment

- Network: `Stellar Testnet`
- Contract id: `CAHG7YZZGL75OEPTLVN53S3JCOIJGXRKJW4IO523RFDRLL2QSNOZMRP3`
- Explorer: https://stellar.expert/explorer/testnet/contract/CAHG7YZZGL75OEPTLVN53S3JCOIJGXRKJW4IO523RFDRLL2QSNOZMRP3
- WASM upload tx: `ba448a3a6940eb61a57af2bd157885d648a0d2a0c9ab94c96c35de65f04199b0`
- Deploy tx: `c728a93d3cd08f59ac5180dfbb719a01bfaf87ddea22d5f6b377bf61041df4ec`
- Sample create poll tx: `5b11d01e8a7be366c3d8cf893e4920b1e574c96727ad3e5d876c96ec13ab86ea`
