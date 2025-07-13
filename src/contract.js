import web3 from './web3';

// The contract ABI and address
const contractABI = [
    {
        "inputs": [
            { "internalType": "string", "name": "_description", "type": "string" },
            { "internalType": "string", "name": "_timestamp", "type": "string" }
        ],
        "name": "addEvidence",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" },
            { "indexed": false, "internalType": "string", "name": "description", "type": "string" },
            { "indexed": false, "internalType": "string", "name": "timestamp", "type": "string" },
            { "indexed": false, "internalType": "address", "name": "addedBy", "type": "address" }
        ],
        "name": "EvidenceAdded",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "evidenceCount",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "uint256", "name": "", "type": "uint256" }
        ],
        "name": "evidences",
        "outputs": [
            { "internalType": "uint256", "name": "id", "type": "uint256" },
            { "internalType": "string", "name": "description", "type": "string" },
            { "internalType": "string", "name": "timestamp", "type": "string" },
            { "internalType": "address", "name": "addedBy", "type": "address" }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getEvidences",
        "outputs": [
            {
                "components": [
                    { "internalType": "uint256", "name": "id", "type": "uint256" },
                    { "internalType": "string", "name": "description", "type": "string" },
                    { "internalType": "string", "name": "timestamp", "type": "string" },
                    { "internalType": "address", "name": "addedBy", "type": "address" }
                ],
                "internalType": "struct EvidenceTracker.Evidence[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const contractAddress = '0xc96e59208909d151a20c4fb86b2b0cc4d8edf4da';  // Replace with your contract address

const contract = new web3.eth.Contract(contractABI, contractAddress);

export const addEvidence = async (_description, _timestamp) => {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.addEvidence(_description, _timestamp).send({ from: accounts[0] });
};

export const getEvidences = async () => {
    return await contract.methods.getEvidences().call();
};