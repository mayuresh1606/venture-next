import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import DbConnect from "../javascript/connect"

function MyApp({ Component, pageProps }) {
  DbConnect();
  return <Component {...pageProps} />
}

export default MyApp
