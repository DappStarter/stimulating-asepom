require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict person forget turn ship riot pizza smooth coin argue sun this'; 
let testAccounts = [
"0x115c09f5dd403342489c5e4f8cb20e014caa6d713ad30663bd3ebb74f4797ea8",
"0xe4e4b64c1365b613ce82c01dbe4cb66aa751a8e95f271f140d928878f75fa777",
"0x155beef99396c0277f3403c798602f7441bec6b23647b47f7708b6d0e1cc82d4",
"0xb0fe4db205053e529602cc2bebde7432b87669897dcfff4f670f2cad28405725",
"0x6b974b60c29c76045b6ac5a3dd023389909da1b8afd3ecbf369caebcd761370c",
"0xf099d8bfde9d6f3d48fb2d14dee8dde4c42772f4d1e5840cc3be92095e5c27af",
"0x3ca0a5ef3564b0545ed96b867b48e43af86285b5fe2164342f3a3bd3bc2246f7",
"0xef8be7ad725e7377e924644824bdca9562770c97d063db277765727851dfe300",
"0x5897b68a85e45d89dd4d5f3d63ac2296c21582c8389560d7e56e358aa1df6a82",
"0xce4cdf9b5de8cbdb6243e40c0d40fc56d2b5ae8a3c10cee49ca205b0a2ebcaa0"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

