export const CONTRACT_ADDRESS = "0x4876858e1f3BdDB7803097aC2Db041E17DEA35ad";
export const CONTRACT_ABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "check",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "low",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "high",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "active",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "paymentoptions",
                "type": "string"
            }
        ],
        "name": "createOrder",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "orderid",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "sent",
                "type": "bool"
            }
        ],
        "name": "Govern",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "paided",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "relaypaided",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "orderid",
                "type": "uint256"
            }
        ],
        "name": "requestverfiy",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "low",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "high",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "active",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "paymentoptions",
                "type": "string"
            }
        ],
        "name": "updateOrder",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "orderid",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "sent",
                "type": "bool"
            }
        ],
        "name": "verfiy",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_trustedForwarder",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "getledger",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address payable",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "low",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "high",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "deposite",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "active",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "paymentoptions",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "orders",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint8",
                        "name": "ordersmissed",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct p2p.enter[]",
                "name": "ledge",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTrustedForwarder",
        "outputs": [
            {
                "internalType": "address",
                "name": "forwarder",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "forwarder",
                "type": "address"
            }
        ],
        "name": "isTrustedForwarder",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "ledger",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "low",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "high",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "deposite",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "active",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "paymentoptions",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "orders",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "ordersmissed",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "orders",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "enterid",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "enum p2p.process",
                "name": "respond",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "ordernumber",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "orderstovalidate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
