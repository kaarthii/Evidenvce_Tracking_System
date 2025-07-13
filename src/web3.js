import Web3 from 'web3';

// Check if the user has MetaMask (or another Ethereum provider)
if (window.ethereum) {
    // Use MetaMask's provider
    var web3 = new Web3(window.ethereum);

    // Request account access if not already granted
    window.ethereum.enable().catch(error => {
        console.error("User denied account access", error);
    });
} else {
    alert("MetaMask not detected! Please install MetaMask or another Ethereum wallet.");
    throw new Error("MetaMask not detected");
}

export default web3;