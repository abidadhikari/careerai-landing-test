import { MyContext } from "@/context/MyContext";
import { useState } from "react";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <MyContext.Provider value={{ currentPage, setCurrentPage }}>
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}
