import React from "react";
import Footer from "./Footer";
import Meta from "./Meta";
import Nav from "./Nav";

export default function Layout({ pageTitle, children }) {
  return (
    <>
      <Meta title={pageTitle} />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
