const express = require('express');
const server = express();

const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic =
  'release coast must bubble town piano brand work minor retire proof media'; // 12 word mnemonic

const provider = new HDWalletProvider(
  mnemonic,
  'https://rinkeby.infura.io/v3/95e3823c0f62479f84423148141a37c2',
  0,
  10
);

const web3 = new Web3(provider.engine);

const { abi } = require('./Token');
const D_ADDR = '0x274b3d251c78f9199c950e21df2bd459694d880b';
const Token = new web3.eth.Contract(abi, D_ADDR);

const getBalance = async x => {
  const balance = await Token.methods.balance(x).call();
  //console.log(Token.methods.balance(x).call());
  return parseInt(balance, 10);
};

const total = async () => {
  const supply = await Token.methods.total_supply.call();
  return parseInt(supply, 10);
};
const mint = async (addr, amount) => {
  const accounts = await web3.eth.getAccounts();
  await Token.methods
    ._mint(addr, amount)
    .send({ from: accounts[0], gas: '1000000' });
};

const transfer = async (from_addr, to_addr, amount) => {
  await Token.methods
    .transfer(to_addr, amount)
    .send({ from: from_addr, gas: '1000000' });
};

const burn = async (addr, amount) => {
  const accounts = await web3.eth.getAccounts();
  await Token.methods
    ._burn(addr, amount)
    .send({ from: accounts[0], gas: '1000000' });
};

// transfer(
//   '0x44AE2F18FCfBffd1e8f881D1B8699a785c7436c0',
//   '0xd851C19d71Ea51F8E65333f0d61EDEb41d37313f',
//   100
// );
// main();

// web3.stop();

server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

const bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const api = '/api/v1';
server.get(api + '/balance/:addr', async (req, res) => {
  let addr = req.params.addr;
  let balance = await getBalance(addr);
  res.json({ addr, balance });
});

server.put(api + '/mint/:addr/:amount', async (req, res) => {
  const addr = req.params.addr;
  const amount = req.params.amount;
  await mint(addr, amount);
  let balance = await getBalance(addr);
  res.json({ addr, balance });
});

server.put(api + '/transfer/:amount/:from_addr/:to_addr', async (req, res) => {
  const amount = req.params.amount;
  const from_addr = req.params.from_addr;
  const to_addr = req.params.to_addr;
  await transfer(from_addr, to_addr, amount);
  res.json({ result: 'sucess' });
});

server.put(api + '/redeem/:addr/:amount', async (req, res) => {
  const addr = req.params.addr;
  const amount = req.params.amount;
  await burn(addr, amount);
  let balance = await getBalance(addr);
  res.json({ addr, balance });
});

server.get(api + '/total', async (req, res) => {
  let t = await total();
  res.json({ "total: ": t });
});

server.listen(8081, () => {
  console.log('Server running on port 8081');
});
