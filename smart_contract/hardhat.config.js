require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.18',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/p2V9NFvTcaNfhxZFGmOz6g7GDXkhayHv',
      accounts: ['734a8c754bdd9b592cff8502c84f8e2bb9d80d0fdca33bb7a5cb3b498616532a'],
    },
  },
};