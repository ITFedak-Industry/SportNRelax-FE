import { ReactNode } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { QueryProvider } from '@src/app/QueryProvider';

import '../core/shared/base.css';

// TanStack Query SSR:  https://tanstack.com/query/latest/docs/framework/react/guides/ssr#full-nextjs-pages-router-example

// eslint-disable-next-line import/no-default-export
export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryProvider>
      </body>
    </html>
  );
}
