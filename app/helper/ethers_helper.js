require('dotenv').config();
const { ethers } = require('ethers');
const { ABI } = require('./abi/config_abi');

const provider_rpc = new ethers.providers.JsonRpcProvider(process.env.RPC || process.env.RPC_FORK);
const provider_ws = new ethers.providers.Web3Provider(process.env.WS || process.env.WS_FORK);

const provider = {
	rpc: provider_rpc,
	ws: provider_ws,
};

const signer = provider.signer();

const createContract = (contract_address, contract_abi, provider) => {
	new ethers.Contract(contract_address, contract_abi, provider);
};
