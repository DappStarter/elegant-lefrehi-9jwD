require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth ranch proud include clip bottom giggle'; 
let testAccounts = [
"0xe2c4b5e4900595aae8c6deeee12be89b72ecb8e2fdaba4dfc58e43fcfe9b22e1",
"0x4952e4f8a521d6e78e727f2d10161c1af302b8ff60104ff1b49ec977c47d66e8",
"0x001d09a364146123772c3c322b440cb3c0ece373c19ad32fc26ea6b210fe2df9",
"0xfe549d2429c8bd54bc4c8f70d60d10195494abfe783f864249f48c2a7d2ca131",
"0x293d823abe900e0d27d9217c0526615a2f5d85e755e047953181aa3b9a4c6889",
"0x66cf5066fc2334718225ec588f510048af841ef760570c42e73f7e0627f259dd",
"0x63e0c47101f6a1da26bc540165496e31c0f4e229d7c0e3e2a7a4cf8cb19d3893",
"0x731bb71c5d45177eac769bb28a444a6a39c08278b9157d927c669b8307a6c9ce",
"0x575ed6d445f0b096131036aacd8afbf0c49e32c450addfd0980a6fafd6fcce8b",
"0xeb71b2d845ba5709b613d0ad21bcd3de615e9159d9d9f1133ea88f7f3cfb9bc9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


