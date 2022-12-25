import type { AppProps } from 'next/app';
import { EmotionCache, CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

import createEmotionCache from '../utils/createEmotionCache';
import darkThemeOptions from '../styles/themes/darkThemeOptions';
import { Layout } from '../components/Layout';
import '../styles/globals.css';

interface ExtendedProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();
const darkTheme = createTheme(darkThemeOptions);

const App: React.FunctionComponent<ExtendedProps> = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: ExtendedProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
