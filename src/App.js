import "./App.css";
import { useState } from "react";

function App() {

  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount() {
    console.log("hii");
    if(window.ethereum) {
      console.log("metamask detected");
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(accounts);
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log(error);
      }
    }else {
      console.log("metamask not detected");
    }
    // window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={requestAccount}>Connect Metamask Wallet</button>
        <h4>Wallet Address: {walletAddress}</h4>
      </header>
    </div>
  );
}

export default App;
