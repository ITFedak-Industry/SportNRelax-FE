import { ReactNode } from 'react';

import { ThemeProvider } from '@src/entities/theme';
import StoreProvider from '@src/app/StoreProvider';

import '@src/shared/base.css';

// eslint-disable-next-line import/no-default-export
export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // useEffect(() => {
  //   // Lazy-load MSW for development
  //   const startMockWorker = async () => {
  //     if (process.env.NODE_ENV === 'development') {
  //       const { startApiMockWorker } = await import('@/app-root/apiMockWorker');
  //       await startApiMockWorker();
  //     }
  //   };
  //   startMockWorker();
  // }, []);

  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
