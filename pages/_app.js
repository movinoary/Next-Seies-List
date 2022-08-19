import "../styles/globals.css";
import * as Components from "../Components";

function MyApp({ Component, pageProps }) {
  return (
    <Components.Layout>
      <Component {...pageProps} />
    </Components.Layout>
  );
}

export default MyApp;
