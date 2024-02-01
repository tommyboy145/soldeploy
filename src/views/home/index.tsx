// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import { CreateAccountError } from '../../components/CreateAccountError';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import { CreateToken } from 'components/CreateToken';
import { UpdateMetadata } from 'components/UpdateMetadata';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (


    <div>
      <div className="container m-auto grid grid-cols-1 mb-3">
        <h1 className='mt-20 text-3xl'>Dashboard</h1>
      </div>

      <div className="container m-auto grid grid-cols-1 gap-4">
        <div className="tile bg-sky-900 rounded-lg flex flex-col p-7">
          <div className="tile bg-sky-800 rounded-lg flex flex-col flex-wrap items-center justify-center h-32 mt-4 mb-5">

            <div className="container m-auto grid grid-cols-4 mb-4">
              <div className="tile bg-red-700 flex flex-col items-center justify-center h-25 ml-5 mr-5">
                <h1 className="tile-marker">ONE</h1>
              </div>
              <div className="tile bg-red-700 flex flex-col items-center justify-center h-24 ml-5 mr-5">
                <h1 className="tile-marker">ONE</h1>
              </div>
              <div className="tile bg-red-700 flex flex-col items-center justify-center h-24 ml-5 mr-5">
                <h1 className="tile-marker">ONE</h1>
              </div>
              <div className="tile bg-red-700 flex flex-col items-center justify-center h-24 ml-5 mr-5">
                <h1 className="tile-marker">ONE</h1>
              </div>
            </div>

          </div>

          <div className="tile bg-sky-800 rounded-lg flex flex-col items-center justify-center w-full h-32 mt-4 mb-5">
            
          <div className="container m-auto grid grid-cols-2 mb-4">
              <div className="tile bg-red-700 flex flex-col items-center justify-center h-24 ml-5 mr-5">
                <h1 className="tile-marker">ONE</h1>
              </div>
              <div className="tile bg-red-700 flex flex-col items-center justify-center h-24 ml-5 mr-5">
                <h1 className="tile-marker">ONE</h1>
              </div>
             
            </div>

          </div>

          <div className="tile bg-sky-800 rounded-lg flex flex-col items-center justify-center w-full h-32 mt-4 mb-5">
            <h1 className="tile-marker">ONE</h1>
          </div>
        </div>
      </div>
    </div>






    // <div className="md:hero mx-auto p-4">
    //   <div className="md:hero-content flex flex-col">
    //     <div className="grid grid-cols-12 auto-rows-[500px]">
    //       <div className="rounded-xl bg-sky-800 flex flex-col items-center justify-center min-w-96">FOO</div>
    //     </div>
    //   </div>
    // </div>
  );
};
