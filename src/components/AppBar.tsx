import { FC, useMemo, useState } from 'react';
import Link from 'next/link';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useAutoConnect } from '../contexts/AutoConnectProvider';

export const AppBar: FC = (props) => {
  const { autoConnect, setAutoConnect } = useAutoConnect();

  const networkOptions = ["Devnet", "Testnet", "Mainnet"];
  const [selectedNetwork, setSelectedNetwork] = useState(networkOptions[0]);


  //Updates the selected network to be used.
  const updateNetwork = (event) => {

    //Change the selected network
    setSelectedNetwork(event.target.value);
    
    //Update the value in .env so that the wallet adapter can tell which network to connect to.
    process.env.SELECTED_NETWORK = event.target.value;    
  };


  return (
    <div>
      {/* NavBar / Header */}
      <div className="navbar flex flex-row md:mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="navbar-start">
          <div className="hidden sm:inline w-22 h-22 md:p-2">
            <img width="200px" src='sol-deploy.png' />

            <h1 className="text-xl">{selectedNetwork}</h1>

          </div>
        </div>



        {/* Wallet & Settings */}
        <div className="navbar-end">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="orange" className="w-6 h-6 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>

          <Link href="/">
            <a className="mr-8">Dashboard</a>
          </Link>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="orange" className="w-6 h-6 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
          </svg>
          <Link href="/mint">
            <a className="mr-8">Mint Token</a>
          </Link>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="orange" className="w-6 h-6 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>

          <Link href="/update">
            <a className="mr-4">Update Metadata</a>
          </Link>
          {/* <Link  href="/uploader">
            <a className="mr-8">Upload Metadata</a>
          </Link>
          <Link  href="/metadata">
            <a className="mr-4">Token Metadata</a>
          </Link> */}
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-square btn-ghost text-right">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box sm:w-52"
            >
              {/* Network Selection */}
              <li>
                <div className="form-control">
                  <span>
                    <a className="mr-11">Network</a>
                    <select id="network-select" onChange={(e)=>updateNetwork(e)} className="bg-base-100">
                      {networkOptions.map((value) => (
                        <option value={value} key={value}>
                          {value}
                        </option>
                      ))}
                      {/* <option>Mainnet</option>
                      <option>Testnet</option>
                      <option selected>Devnet</option> */}
                    </select>
                  </span>
                </div>
              </li>

              {/* Autoconnect */}
              <li>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <a>Autoconnect</a>
                    <input
                      type="checkbox"
                      checked={autoConnect}
                      onChange={(e) => setAutoConnect(e.target.checked)}
                      className="toggle"
                    />
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <WalletMultiButton className="btn btn-ghost mr-4" />
        </div>
      </div>
      {props.children}
    </div>
  );
};
