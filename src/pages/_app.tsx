import { AppProps } from 'next/app';
import NextNProgress from "nextjs-progressbar";
import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import '@/styles/home.css';

import Auth from '../hooks/useAuth';
import Authorization from '../hooks/useAuthorization';
import { Provider } from "react-redux";
import store from '@/store';
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
      <Provider store={store}>
        <Auth>
          <Authorization>
            <Component {...pageProps} />
          </Authorization>
        </Auth>
      </Provider>
    </>
  )
}

export default MyApp;
