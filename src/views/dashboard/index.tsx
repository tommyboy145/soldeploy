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

export const DashboardView: FC = ({ }) => {

  return (

    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl font-bold mb-5">
          Dashboard
        </h1>      
        <div className="text-center">
         This is the dashboard
         
        </div>
      </div>
    </div>
  );
};
