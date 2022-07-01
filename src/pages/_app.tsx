import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import NextNProgress from "nextjs-progressbar";
import 'antd/dist/antd.css';
import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import '@/styles/home.css';

import {Authorization, Auths} from '@/hooks';
import { Provider } from "react-redux";
import store from '@/store';

const WalletProvider = dynamic(
  () => import("../contexts/clientWalletProvider"),
  {
    ssr: false,
  }
);
/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <WalletProvider>
        <Provider store={store}>
            <Auths>
              <Authorization>
                <Component {...pageProps} />
              </Authorization>
            </Auths>
        </Provider>
      </WalletProvider>
    </>
  )
}

export default MyApp;
