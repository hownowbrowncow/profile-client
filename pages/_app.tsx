import type { AppProps } from 'next/app';
import { EmotionCache, CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import createEmotionCache from '../utils/createEmotionCache';
import darkThemeOptions from '../styles/themes/darkThemeOptions';
import { Layout } from '../components/Layout';
import '../styles/globals.css';

interface ExtendedProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();
const darkTheme = createTheme(darkThemeOptions);
const queryClient = new QueryClient();

const App: React.FunctionComponent<ExtendedProps> = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: ExtendedProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
