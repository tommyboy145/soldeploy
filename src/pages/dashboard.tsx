import type { NextPage } from "next";
import Head from "next/head";
import { DashboardView } from "../views";

const Dashboard: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Solana Scaffold"
        />
      </Head>
      <DashboardView />
    </div>
  );
};

export default Dashboard;
