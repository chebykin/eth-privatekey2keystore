// https://ethereum.stackexchange.com/a/11226/20417

let privateKey = process.argv[2];

if (!privateKey || privateKey.length === 0) {
  console.log("You need to specify a private key");
  process.exit(1);
}

let Wallet = require('ethereumjs-wallet');
let key = Buffer.from(privateKey, 'hex');
let wallet = Wallet.fromPrivateKey(key);
let s = wallet.toV3String('');
console.log(s);
