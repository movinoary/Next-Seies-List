import React from "react";
import Footer from "./Footer";
import Meta from "./Meta";

export default function Layout({ pageTitle, children }) {
  return (
    <>
      <Meta title={pageTitle} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
