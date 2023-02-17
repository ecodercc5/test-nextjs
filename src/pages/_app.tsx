import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import * as ASdf from "openai";
import * as qwer from "firebase/app";
// import * as rtyu from "firebase-admin";
import * as qwerqwer from "pdfjs-dist";

const asdf = [ASdf, qwer, qwer, qwerqwer];

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
