import Head from "next/head";

export const metadata = {
  title: "News Section",
  description: "Stay updated with the latest news.",
};

export default function Layout({ children }) {
  return <main className="bg-white">{children}</main>;
}
