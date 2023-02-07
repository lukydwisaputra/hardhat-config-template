require('dotenv').config();
const { ethers } = require('ethers');
const { ABI } = require('../abi/config_abi');

const status = "MAINNET"
// const status = "FORKING"

const provider = {
	rpc: new ethers.providers.JsonRpcProvider(status == "FORKING" ? process.env.RPC_FORK : process.env.RPC),
	ws: new ethers.providers.WebSocketProvider(status == "FORKING" ? process.env.WS_FORK : process.env.WS),
};

const createContract = (contract_address, contract_abi, provider) => {
	return new ethers.Contract(contract_address, contract_abi, provider);
};

module.exports = {
	ethers,
	ABI,
	createContract,
};
