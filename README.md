OWS
=======

[![NPM Package](https://img.shields.io/npm/v/ows.svg?style=flat-square)](https://www.npmjs.org/package/ows)
[![Build Status](https://img.shields.io/travis/owstack/ows.svg?branch=master&style=flat-square)](https://travis-ci.org/owstack/ows)

Infrastructure to build blockchain-based applications for the next generation of financial technology.

## Getting Started

Before you begin you'll need to have Node.js v8 installed. There are several options for installation. One method is to use [nvm](https://github.com/creationix/nvm) to easily switch between different versions, or download directly from [Node.js](https://nodejs.org/).

```bash
npm install -g ows
```

Spin up a full node and join the bitcoin network:

```bash
npm install -g ows
ows start btccore
```

You can then view the OWS Explorer at the default location: `http://localhost:3001/explorer`, and your configuration file will be found in your home directory at `~/.ows`.

Create a bitcoin transaction:
```js
var btccore = require('btccore');
var transaction = new btccore.Transaction();
var transaction.from(unspent).to(address, amount);
transaction.sign(privateKey);
```

## Bitcoin

### Applications

- [Node](https://github.com/owstack/btccore-node) - A full node with extended capabilities using Bcoin
- [Explorer API](https://github.com/owstack/btccore-explorer-api) - A blockchain explorer HTTP API
- [Wallet Service](https://github.com/owstack/btccore-wallet-service) - A multisig HD service for wallets
- [Wallet Client](https://github.com/owstack/btccore-wallet-client) - A client for the wallet service
- [CLI Wallet](https://github.com/owstack/btccore-wallet) - A command-line based wallet client

### Libraries

- [Lib](https://github.com/owstack/btccore-lib) - All of the core Bitcoin primatives including transactions, private key management and others
- [Payment Protocol](https://github.com/owstack/btccore-payment-protocol) - A protocol for communication between a merchant and customer
- [P2P](https://github.com/owstack/btccore-p2p) - The peer-to-peer networking protocol
- [Mnemonic](https://github.com/owstack/btccore-mnemonic) - Implements mnemonic code for generating deterministic keys
- [Channel](https://github.com/owstack/btccore-channel) - Micropayment channels for rapidly adjusting bitcoin transactions
- [Message](https://github.com/owstack/btccore-message) - Bitcoin message verification and signing
- [ECIES](https://github.com/owstack/btccore-ecies) - Uses ECIES symmetric key negotiation from public keys to encrypt arbitrarily long data streams.

## Bitcoin Cash

### Applications

- [Node](https://github.com/owstack/bcccore-node) - A full node with extended capabilities using Bitcoin ABC
- [Explorer API](https://github.com/owstack/bcccore-explorer-api) - A blockchain explorer HTTP API
- [Wallet Service](https://github.com/owstack/bcccore-wallet-service) - A multisig HD service for wallets
- [Wallet Client](https://github.com/owstack/bcccore-wallet-client) - A client for the wallet service
- [CLI Wallet](https://github.com/owstack/bcccore-wallet) - A command-line based wallet client

### Libraries

- [Lib](https://github.com/owstack/bcccore-lib) - All of the core Bitcoin primatives including transactions, private key management and others
- [Payment Protocol](https://github.com/owstack/bcccore-payment-protocol) - A protocol for communication between a merchant and customer
- [P2P](https://github.com/owstack/bcccore-p2p) - The peer-to-peer networking protocol
- [Mnemonic](https://github.com/owstack/bcccore-mnemonic) - Implements mnemonic code for generating deterministic keys
- [Channel](https://github.com/owstack/bcccore-channel) - Micropayment channels for rapidly adjusting bitcoin transactions
- [Message](https://github.com/owstack/bcccore-message) - Bitcoin Cash message verification and signing
- [ECIES](https://github.com/owstack/bcccore-ecies) - Uses ECIES symmetric key negotiation from public keys to encrypt arbitrarily long data streams.

## OWS Applications

- [OWS Explorer](https://github.com/owstack/ows-explorer) - A blockchain explorer web user interface
- [OWS Wallet](https://github.com/owstack/copay) - An easy-to-use, multiplatform, multisignature, secure wallet

## Documentation

The complete docs are hosted here: [OWS documentation](http://openwalletstack.com/guide/). There's also a [OWS API reference](http://openwalletstack.com/api/) available generated from the JSDocs of the project, where you'll find low-level details on each OWS utility.

- [Read the Developer Guide](http://openwalletstack.com/guide/)
- [Read the API Reference](http://openwalletstack.com/api/)

## Security

If you find a security issue, please email security@openwalletstack.com.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/owstack/ows/blob/master/CONTRIBUTING.md) file.

## License

Code released under [the MIT license](https://github.com/owstack/ows/blob/master/LICENSE).

Copyright 2017 Open Wallet Stack.
