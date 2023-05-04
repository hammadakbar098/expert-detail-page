import Image from "next/image";
import { Inter } from "next/font/google";
import { Detail } from "../Components/Layout/ProductLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Detail />
    </>
  );
}
