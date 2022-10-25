import '@nomicfoundation/hardhat-toolbox';
import '@openzeppelin/hardhat-upgrades';
import 'hardhat-gas-reporter';
import 'hardhat-contract-sizer';
import * as dotenv from 'dotenv';
dotenv.config();

module.exports = {
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_URL || '',
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    goerli: {
      url: process.env.GOERLI_RPC_URL || '',
      chainId: 5,
      saveDeployments: true,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] :  [],
    },
    coverage: {
      url: 'http://127.0.0.1:8555', // Coverage launches its own ganache-cli client
    },
  },
  gasReporter: {
    enabled: process.env.ENABLE_GAS_REPORT !== undefined,
    currency: 'USD',
    // outputFile: 'gas-report.txt',
    // noColors: true,
    // coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: false,
    disambiguatePaths: false,
  },
};
