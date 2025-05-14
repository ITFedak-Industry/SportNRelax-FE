import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

import '@src/shared/base.css';

import '@src/app/apiMockWorker';

import { browserEnv } from '@src/shared/lib';

import { StoreProvider } from '../StoreProvider';
import { ThemeProvider } from '../ThemeProvider';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: browserEnv,
          }}
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// eslint-disable-next-line import/no-default-export
export default function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </StoreProvider>
  );
}
