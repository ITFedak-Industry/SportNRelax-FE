import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

import '@src/shared/base.css';

import { StoreProvider } from '../StoreProvider';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      <Outlet />
    </StoreProvider>
  );
}
