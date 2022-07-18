import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { isAuthenticated, authenticate } = useMoralis();
  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated) router.push("/page", undefined, { shallow: true });
  }, [isAuthenticated]);
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Head>
        <title>NFT Market Place</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center">
        <img
          src="/assets/i/icon.png"
          style={{ width: "400px", height: "auto" }}
        ></img>
        <button
          className="border-solid border-2 border-orange-500 px-5 py-4 text-xl rounded-xl bg-yellow-300 "
          onClick={() =>
            authenticate({ signingMessage: "Authorize linking of your wallet" })
          }
        >
          Connect Your Metamask Wallet!
        </button>
      </div>
    </div>
  );
}
