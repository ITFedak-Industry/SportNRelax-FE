import { ReactNode, useEffect } from 'react';
import { ThemeProvider } from '@/entities/theme';
import '@/shared/base.css';
import StoreProvider from '@/app-root/StoreProvider';

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
