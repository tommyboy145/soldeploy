import type { NextPage } from "next";
import Head from "next/head";
import { MintView } from "../views";

const Mint: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Solana Scaffold"
        />
      </Head>
      <MintView />
    </div>
  );
};

export default Mint;
